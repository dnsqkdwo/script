fetch('asset/find_library.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })