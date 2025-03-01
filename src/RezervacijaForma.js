import { useState, useEffect } from "react";
import { db, collection, addDoc, getDocs } from "./firebase";

function RezervacijaForma() {
    const [ime, setIme] = useState("");
    const [prezime, setPrezime] = useState("");
    const [telefon, setTelefon] = useState("");
    const [datum, setDatum] = useState("");
    const [splavovi, setSplavovi] = useState([]);
    const [odabraniSplav, setOdabraniSplav] = useState("");

    useEffect(() => {
        const fetchSplavovi = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "rezervacije"));
                const zauzetiSplavovi = querySnapshot.docs
                    .filter((doc) => doc.data().datum === datum)
                    .map((doc) => doc.data().splav);

                const splavovi = [
                    { key: "splav1", naziv: "Splav 1", url: "/images/splav1.jpg" },
                    { key: "splav2", naziv: "Splav 2", url: "/images/splav2.jpg" },
                    { key: "splav3", naziv: "Splav 3", url: "/images/splav3.jpg" },
                    { key: "splav4", naziv: "Splav 4", url: "/images/splav4.jpg" },
                ];

                const dostupniSplavovi = splavovi.filter(
                    (splav) => !zauzetiSplavovi.includes(splav.key)
                );

                setSplavovi(dostupniSplavovi);
            } catch (error) {
                console.error("Greška pri dohvaćanju splavova:", error);
            }
        };
        fetchSplavovi();
    }, [datum]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!ime || !prezime || !telefon || !datum || !odabraniSplav)
            return alert("Popuni sva polja!");

        try {
            await addDoc(collection(db, "rezervacije"), {
                ime,
                prezime,
                telefon,
                datum,
                splav: odabraniSplav,
                status: "Na čekanju",
            });

            setIme("");
            setPrezime("");
            setTelefon("");
            setDatum("");
            setOdabraniSplav("");
            alert("Rezervacija dodata!");
        } catch (error) {
            console.error("Greška pri dodavanju rezervacije:", error);
            alert("Došlo je do greške prilikom rezervacije.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ime"
                value={ime}
                onChange={(e) => setIme(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Prezime"
                value={prezime}
                onChange={(e) => setPrezime(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Broj telefona"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                required
            />
            <input
                type="date"
                value={datum}
                onChange={(e) => setDatum(e.target.value)}
                required
            />
            <select
                value={odabraniSplav}
                onChange={(e) => setOdabraniSplav(e.target.value)}
                required
            >
                <option value="">Izaberi splav</option>
                {splavovi.map((splav) => (
                    <option key={splav.key} value={splav.key}>
                        {splav.naziv}
                    </option>
                ))}
            </select>
            <button type="submit">Rezerviši</button>
        </form>
    );
}

export default RezervacijaForma;