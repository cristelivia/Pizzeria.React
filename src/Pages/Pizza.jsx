import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



export default function Pizza() {
  const { id } = useParams(); 
  console.log("ID de la pizza:", id);
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo encontrar la pizza");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;

  if (!pizza) return null;

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <img src={pizza.img} alt={pizza.name} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{pizza.name}</h2>
          <p className="card-text">{pizza.desc}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>🍕 {ing}</li>
            ))}
          </ul>
          <h3 className="mt-3">${pizza.price}</h3>
        </div>
      </div>
    </div>
  );
}
