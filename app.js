
async function getImage() {
  try {
   
      const data = await fetch("https://randomfox.ca/floof/")
   
    console.log(data.json());
  } catch (error) {
    console.log(error);
    alert("oops");
  }
}

getImage()