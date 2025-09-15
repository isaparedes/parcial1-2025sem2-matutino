const url = 'http://localhost:3000/users';
const lista = document.getElementById("users");
const botonAdd = document.getElementById("add");

async function mostrarUsuarios() {
    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        if (!response.ok) throw new Error('Error obteniendo usuarios');
        const users = await response.json();
        users.forEach(user => {
            const item = document.createElement("li");
            const datos = document.createElement("p")
            datos.textContent = `Nombre: ${user.name}/Rol: ${user.role}/Email: ${user.email}`;
            item.append(datos);
            const promote = document.createElement("button");
            promote.textContent = "Promote";
            promote.onclick = () => promote(user);
            item.append(promote);
            const demote = document.createElement("button");
            demote.textContent = "Demote";
            demote.onclick = () => demote(user);
            item.append(demote);
            const btndelete = document.createElement("button");
            btndelete.textContent = "Delete";
            btndelete.onclick = () => deleteUser(user.id, item);
            item.append(btndelete);
            lista.appendChild(item);
        });
    }
    catch (error) {
        console.log('Error al mostrar usuarios: ', error);
    }
}


botonAdd.addEventListener('click', async (event) => {
    const name = document.getElementById("nombre").value;
    const email = document.getElementById("mail").value;
    const role = document.getElementById("rol").value;
    const datos = {name: name, role: role, email: email};
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        if (!response.ok) throw new Error('No se pudo guardar la nueva canción');
        const data = await response.json();
        console.log('Guardado en json-server:', data);
        name.value = '';
        email.value = '';
        role.value = '';
    }
    catch (error) {
        console.log('Error al crear usuario: ', error)
    }
});

async function promote(user) {
  try {
    let rol = "Admin";
    if (user.role == "Viewer") {
        rol == "Editor";
    }
    if (user.role = "Editor") {
        rol = "Admin";
    }
    const urlUser = `${url}/${user.id}`;
    const response = await fetch(urlUser, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        role: rol
      })
    });
    if (!response.ok) throw new Error('No se pudo actualizar el rol');
    const data = await response.json();
    console.log('Guardado en json-server:', data);
  }
  catch (error) {
    console.log('Error actualizando rol: ', error);
  }
}

async function demote(user) {
  try {
    let rol = "Viewer";
    if (user.role == "Editor") {
        rol = "Viewer";
    }
    if (user.role == "Admin") {
        rol = "Editor";
    }
    const urlUser = `${url}/${user.id}`;
    const response = await fetch(urlUser, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        role: rol
      })
    });
    if (!response.ok) throw new Error('No se pudo actualizar el rol');
    const data = await response.json();
    console.log('Guardado en json-server:', data);
  }
  catch (error) {
    console.log('Error actualizando rol: ', error);
  }
}

async function deleteUser(id, li) {
  try {
    const urlUser = `${url}/${id}`
    const response = await fetch(urlUser, {
      method: 'DELETE'
    });
    if (response.ok) {
      li.remove();
    } else {
      console.error('No se pudo borrar');
    }
  }
  catch (error) {
    console.log('Error borrando usuario: ', error);
  }
}

mostrarUsuarios();