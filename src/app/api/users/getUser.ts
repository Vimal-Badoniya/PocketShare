import { doc, getDoc } from "firebase/firestore";
import { db } from "../../db/firebase/firebase";

export async function getUser() {
  const userId = "PS1";
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    return { props: { user: null } };
  }

  const user = { id: userSnap.id, ...userSnap.data() };
  return { props: { user } };
}
