function additionner() {
    // Récupération des valeurs des inputs
    let num1 = document.getElementById("nombre1").value;
    let num2 = document.getElementById("nombre2").value;

    // Convertir les valeurs en nombres
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Vérifier si les entrées sont valides
    if (isNaN(num1) || isNaN(num2)) {
        alert("Veuillez entrer deux nombres valides !");
        return;
    }

    // Appeler la fonction qui fait l'addition
    let resultat = add(num1, num2);

    // Afficher le résultat dans la page
    document.getElementById("resultat").textContent = resultat;
}




function add(a, b) {
    return a + b;
  }
  
module.exports = { add };