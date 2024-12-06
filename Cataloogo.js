fetch('Catalógo.json')
   .then(response => {
      if (!response.ok) {
         throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
      }
      return response.json();
   })
   .then(data => {
      const productList = document.getElementById('product-list');
      
      data.forEach(product => {
         const productElement = document.createElement('div');
         productElement.classList.add('product');
         productElement.innerHTML = `
            <h3>${product.descripcion}</h3>
            <p><strong>Almacén:</strong> ${product.almacen}</p>
            <p><strong>Referencia:</strong> ${product.referencia}</p>
            <p><strong>Unidad de Medida:</strong> ${product.unidad_de_medida}</p>
            <p><strong>Familia:</strong> ${product.familia}</p>
            <p class="precio"><strong>Precio:</strong> ${product.precio}</p>
         `;
         productList.appendChild(productElement);
      });
   })
   .catch(error => {
      console.error(error);
      document.getElementById('product-list').innerHTML = '<p>Error al cargar los productos.</p>';
   });
