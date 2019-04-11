$(function () {
    const formValidation = function (){
        let checker = true;

        //check if input is empty
        $('input').each(function (){
            if (!$(this).val()) {
                checker = false;
            }
        });

        //check if option is selected
        $('.custom-select').each(function (i, element){
            if (!$(this).val()){
                checker = false;
            }
        });

        return checker;
    }

    const modalPopUp = function (data){

        //get the data from the ajax call 
        $('#match-name').text(data.name);
        $('#match-img').attr('src', data.photo);

        //initialize the modL
        $('#results-modal').modal('toggle');
    }

    const submit = function (e){
        e.preventDefault();

        //confirm form is filled
        if (formValidation()){

            //object that holds user inputs
            const userChoices = {
                name: $('#name').val().trim(),
                photo: $('#photo').val().trim(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val()
                ]
            };

            // AJAX post to employees API.
            $.post('/api/employees', userChoices, modalPopUp);

        } else{

            //form not filled error handle
            $('#error')
                .text('Uh Oh You forgot to fill something. All fields are required!')
                .addClass('alert alert-danger');
        }
    }

    $('#submit').on('click', submit)

});