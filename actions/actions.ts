"use server";

import { adminDb } from "@/firebase-admin";
import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";
import { Timestamp } from "firebase-admin/firestore"; // Import Firestore Timestamp

export async function createNewDocument() {
  try {
    // Ensure the user is logged in
    auth.protect();

    // Fetch session claims
    const { userId, redirectToSignIn } = await auth();

    if (!userId) return redirectToSignIn();

    const { sessionClaims } = await auth();

    const userEmail = sessionClaims?.email;

    if (!userEmail) {
      throw new Error("User email is undefined");
    }

    // Reference to the Firestore collection
    const docCollectionRef = adminDb.collection("documents");

    // Create a new document
    const docRef = await docCollectionRef.add({
      title: "New Doc",
    });

    // Save the document in the user's room collection
    await adminDb
      .collection("users")
      .doc(userEmail)
      .collection("rooms")
      .doc(docRef.id)
      .set({
        userId: userEmail,
        role: "owner",
        createdAt: Timestamp.now(), // Use Firestore Timestamp for consistency
        roomId: docRef.id,
      });

    // Return the new document ID
    return { docId: docRef.id };
  } catch (error) {
    console.error("Error creating a new document:", error);
    throw new Error("Failed to create a new document. Please try again.");
  }
}

export async function deleteDocument(roomId: string) {
  auth.protect();

  console.log("deleteDocument", roomId);

  try {
    //! delete the document ref
    await adminDb.collection("documents").doc(roomId).delete();

    const query = await adminDb
      .collectionGroup("rooms")
      .where("roomId", "==", roomId)
      .get();

    const batch = adminDb.batch();
    //! delete the room ref in the user's collection for every user in the room
    query.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();

    await liveblocks.deleteRoom(roomId);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function inviteUserToDocument(roomId: string, email: string) {
  auth.protect();

  console.log("inviteUserToDocument", roomId, email);

  try {
    await adminDb
      .collection("users")
      .doc(email)
      .collection("rooms")
      .doc(roomId)
      .set({
        userId: email,
        role: "editor",
        createdAt: new Date(),
        roomId,
      });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function removeUserFromDocument(roomId: string, userId: string) {
  auth.protect();

  console.log("removeUserFromDocument", roomId, userId);

  try {
    await adminDb
      .collection("users")
      .doc(userId)
      .collection("rooms")
      .doc(roomId)
      .delete();

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
