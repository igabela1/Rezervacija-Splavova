import { useEffect, useState } from "react";
import { db, collection, onSnapshot, updateDoc, doc, deleteDoc } from "./firebase";

function RezervacijeLista() {
  const [rezervacije, setRezervacije] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "rezervacije"), (snapshot) => {
      setRezervacije(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const odobriRezervaciju = async (id) => {
    try {
      await updateDoc(doc(db, "rezervacije", id), { status: "Odobreno" });
    } catch (error) {
      console.error("Greška pri odobravanju rezervacije:", error);
    }
  };

  const odbijRezervaciju = async (id) => {
    try {
      await updateDoc(doc(db, "rezervacije", id), { status: "Odbijeno" });
    } catch (error) {
      console.error("Greška pri odbijanju rezervacije:", error);
    }
  };

  const obrisiRezervaciju = async (id) => {
    try {
      await deleteDoc(doc(db, "rezervacije", id));
    } catch (error) {
      console.error("Greška pri brisanju rezervacije:", error);
    }
  };

  return (
    <ul>
      {rezervacije.map((rez) => (
        <li key={rez.id}>
          {rez.ime} {rez.prezime} - {rez.telefon} - {
            new Date(rez.datum).toLocaleDateString("sr-Latn", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          } - {rez.splav} - {rez.status} - {rez.komentar}
          {rez.status === "Na čekanju" && (
            <>
              <button onClick={() => odobriRezervaciju(rez.id)}>Odobri</button>
              <button onClick={() => odbijRezervaciju(rez.id)}>Odbij</button>
            </>
          )}
          <button onClick={() => obrisiRezervaciju(rez.id)}>Obriši</button>
        </li>
      ))}
    </ul>
  );
}

export default RezervacijeLista;