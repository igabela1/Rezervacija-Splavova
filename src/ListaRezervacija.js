import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

function ListaRezervacija() {
  const [rezervacije, setRezervacije] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "rezervacije"), (snapshot) => {
      setRezervacije(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const odobriRezervaciju = async (id, splav) => {
    await updateDoc(doc(db, "rezervacije", id), { status: "Odobreno" });
  };

  const odbijRezervaciju = async (id, splav) => {
    await updateDoc(doc(db, "rezervacije", id), { status: "Odbijeno" });

    // Vraćanje splava na dostupno (true) ako je odbijeno
    const splavDoc = doc(db, "splavovi", "Splavovi");
    await updateDoc(splavDoc, { [splav]: true });
  };

  return (
    <ul>
      {rezervacije.map((rez) => (
        <li key={rez.id}>
          {rez.ime} - {rez.datum} - {rez.splav} - {rez.status}  
          {rez.status === "Na čekanju" && (
            <>
              <button onClick={() => odobriRezervaciju(rez.id, rez.splav)}>Odobri</button>
              <button onClick={() => odbijRezervaciju(rez.id, rez.splav)}>Odbij</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ListaRezervacija;
