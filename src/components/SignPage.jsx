// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { FiLink } from "react-icons/fi";
import Navbar from "./Navbar";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
function SignPage() {
  const [supporters, setSupporters] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user && user.displayName) {
        const name = user.displayName;

        // Add supporter to Firestore
        await addDoc(collection(db, "supporters"), {
          name,
          timestamp: Timestamp.now(),
        });

        setCurrentUser(name); // Show current support message
        fetchSupporters(); // Refresh list

        // Auto sign out after 3 seconds
        setTimeout(() => {
          signOut(auth);
          setCurrentUser(null);
        }, 3000);
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  const fetchSupporters = async () => {
    const q = query(collection(db, "supporters"), orderBy("timestamp", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => doc.data());
    setSupporters(data);
  };

  useEffect(() => {
    fetchSupporters();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#F1F1F1]">
      <Navbar />
      <div className="h-1/3 flex flex-col justify-center items-start w-full max-w-md px-6 gap-y-2">
        <h1 className="text-3xl text-left ">
          Join the <span className="italic">Voices</span>
        </h1>
        <p className="text-sm italic text-[#5B636E]">
          “Join the voices” represents a collective stand for independent,
          unbiased journalism by marking your support and making your presence
          count.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded-md flex flex-row items-center gap-x-2 hover:cursor-pointer hover:bg-[#5B636E]"
          onClick={handleSignIn}
        >
          <FiLink /> Sign In with Google
        </button>
        {/* {currentUser && (
          <div className="text-black font-semibold text-lg mt-4">
            {currentUser} supports real news!
          </div>
        )} */}
      </div>
      <div className="h-2/3 w-full flex flex-col items-start  overflow-y-auto max-w-md px-6">
        <ul className="text-gray-700 space-y-2 text-left">
          {supporters.map((s, idx) => (
            <li key={idx}>
              <span className="italic font-medium">{s.name}</span> supports real
              news
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SignPage;
