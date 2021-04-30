function gethistory() {
    return document.getElementById('history-value').innerText;
}
function printhistory(num) {
    document.getElementById('history-value').innerText = num;
}
function getoutput() {
    return document.getElementById('output-value').innerText;
}
function printoutput(num) {
    document.getElementById('output-value').innerText = num;
}



var opr1 = document.getElementsByClassName('opr');
for (var i = 0; i < opr1.length; i++) {
    opr1[i].addEventListener('click', function () {
       // num1 = gethistory();
        if (this.id == 'eql') {
            
             num1 = gethistory();
             var voteable = (num1 == '') ? printoutput(0):num1 = eval(num1);;
             //num1 = eval(num1);
             printoutput(num1);
             
            

           

        }
        else if (this.id == 'bs') {
            var output = gethistory().toString();
            if (output) {
                output = output.substr(0, output.length - 1);

                printhistory(output);
            }
        }
        else if (this.id == 'mul') {

            var his = gethistory();
            his = his + '*';
            printhistory(his);


        }
        else if (this.id == 'add') {

            var his = gethistory();
            his = his + '+';
            printhistory(his);
        }

        else if (this.id == 'minus') {

            var his = gethistory();
            his = his + '-';
            printhistory(his);
        }

        else if (this.id == 'div') {

            var his = gethistory();
            his = his + '/';
            printhistory(his);
        }

        else if (this.id == 'per') {

            var his = gethistory();
            his = his + '%';
            printhistory(his);
            his = his.substr(0, his.length - 1);
                his = his + '/100';
                his = eval(his);
                printoutput(his);
        }

        else if (this.id == 'clear') {

            printhistory('');
            printoutput(0);



        }
    })
}
var num1 = document.getElementsByClassName('digit');
for (var i = 0; i < num1.length; i++) {
    num1[i].addEventListener('click', function () {
        var num2 = gethistory();
        num2 = num2 + this.id;
        printhistory(num2);

    })
}