
$(document).ready(function () {

    $('button').click(function () {
        if ($('input').val() != "") {
            var li = $('<li></li>')
            $('ol').append(li)
            li.html($('#taskname').val())
            var deleteLi = $("<span>   X</span>")
            li.append(deleteLi)
            $(deleteLi).click(function () {
                li.remove()
            })
            $('input').val("")
        }
    })

    $('#items').sortable();

    $(function () {
        //with control
        var timer1 = $('.timer1').startTimer({
            onPause: $('.timerpause'),
            onReset: $('.timerreset'),
            onStart: $('.timerstart'),
            onComplete: function () {
                var li = $('li')
                $('#taskdone').append(li.first());
            }
        });
    })
})

