import { useState } from "react";
import { storage } from "./firebase"; // Pretpostavljajući da je firebase.js konfiguriran
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UploadSlike() {
  const [slike, setSlike] = useState([]);

  const handlePromjenaSlika = (e) => {
    setSlike([...e.target.files]);
  };

  const handleUpload = async () => {
    for (const slika of slike) {
      const slikaRef = ref(storage, `splavovi/${slika.name}`);
      await uploadBytes(slikaRef, slika);
      const downloadURL = await getDownloadURL(slikaRef);
      console.log("URL slike:", downloadURL);

      
    }
    alert("Slike su uspješno uploadane!");
  };

  return (
    <div>
      <input type="file" multiple onChange={handlePromjenaSlika} />
      <button onClick={handleUpload}>Upload slika</button>
    </div>
  );
}

export default UploadSlike;