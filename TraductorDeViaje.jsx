import { useState } from "react";

const languageOptions = {
  Francia: "francés",
  Italia: "italiano",
  Alemania: "alemán",
  Bélgica: "francés / neerlandés / alemán",
  PaísesBajos: "neerlandés",
  Portugal: "portugués",
  Inglaterra: "inglés",
  Suiza: "francés / alemán / italiano",
};

const mockTranslations = {
  "¿Dónde está la estación de tren?": {
    francés: "Où est la gare ?",
    italiano: "Dov'è la stazione dei treni?",
    alemán: "Wo ist der Bahnhof?",
    portugués: "Onde fica a estação de trem?",
    neerlandés: "Waar is het treinstation?",
    inglés: "Where is the train station?",
  },
};

export default function TraductorDeViaje() {
  const [pais, setPais] = useState("Francia");
  const [idioma, setIdioma] = useState("francés");
  const [frase, setFrase] = useState("");
  const [traduccion, setTraduccion] = useState("");

  const traducir = () => {
    const traduccionSimulada = mockTranslations[frase]?.[idioma] || "Traducción no disponible";
    setTraduccion(traduccionSimulada);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Traductor de Viaje Europa</h1>

      <label>Selecciona el país donde estás:</label>
      <select
        value={pais}
        onChange={(e) => {
          const nuevoPais = e.target.value;
          setPais(nuevoPais);
          const idiomaPorDefecto = languageOptions[nuevoPais]?.split(" / ")[0];
          setIdioma(idiomaPorDefecto);
        }}
      >
        {Object.keys(languageOptions).map((pais) => (
          <option key={pais} value={pais}>{pais}</option>
        ))}
      </select>

      <label>Idioma objetivo:</label>
      <input
        value={idioma}
        onChange={(e) => setIdioma(e.target.value)}
        placeholder="Ej. francés, italiano"
      />

      <label>Escribe tu frase en español:</label>
      <textarea
        value={frase}
        onChange={(e) => setFrase(e.target.value)}
        placeholder="¿Dónde está la estación de tren?"
      />

      <button onClick={traducir}>Traducir</button>

      {traduccion && (
        <div>
          <p><strong>Traducción al {idioma}:</strong></p>
          <p>{traduccion}</p>
        </div>
      )}
    </div>
  );
}