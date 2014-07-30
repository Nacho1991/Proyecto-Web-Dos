var x = 10;


function prepareBinding() {
    $("#btnAgregarEstudiante").bind("click", function() {
        my_alert('text 2');
    });
//    $("#test_button").click(function() {
//        saveStudent();
//    });
}

function saveStudent() {
    // obtener datos del form
    var name = document.getElementById('first_name').value,
            last_name = document.getElementById('last_name').value;

    // crear objeto estudiante
    var student = {"name": name, "last_name": last_name};

    // leer los estudiantes de localstorage
    var students = JSON.parse(localStorage.getItem('students'));
    if (students === null) {
        students = [];
    }

    // agregar el estudiante
    students.push(student);

    // volver guardar en localstoraage
    localStorage.setItem('students', JSON.stringify(students));
}

function my_alert(text) {
    alert(text);
}

function deleteStudent(element) {
    if (confirm('Are you sure you want to delete user')) {
        alert('User with name: ' + element.value + ' was deleted');
        document.location.href = 'index_success.html';
    } else {
        document.location.href = 'index.html';
    }
}

