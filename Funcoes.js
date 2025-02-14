const nums = [];
const oper = new Array('+', '-');
var ind1, ind2, op, resul;
for (let a=10; a<=999; a++){
    nums.push(a);
};

var a = Math.floor(Math.random()*nums.length);
var b = Math.floor(Math.random()*nums.length);
var c = Math.floor(Math.random()*oper.length);
ind1 = nums[a];
ind2 = nums[b];
op = oper[c];
if(op=='+'){
    resul = ind1+ind2;
}else if(op=='-'){
    resul = ind1-ind2;
};

function verify1(){
    if($("#Txt7").is(":checked")){
        $("#Text").val("");
        $("#box1").hide("fast");
        $("#box2").css({display:"inline-block"});
        $("#Question").html("Qual o resultado de " + ind1 + " " + op + " " + ind2 + "?");
    };
};

function verify2(){
    var ans1 = $("#Text").val();
    if(ans1 == resul){
        $("#box2").hide("fast");
        $("#box1").show("fast");
        a = Math.floor(Math.random()*nums.length);
        b = Math.floor(Math.random()*nums.length);
        c = Math.floor(Math.random()*oper.length);
        ind1 = nums[a];
        ind2 = nums[b];
        op = oper[c];
        if(op=='+'){
            resul = ind1+ind2;
        }else if(op=='-'){
            resul = ind1-ind2;
        };
    }else{
        alert("Resposta incorreta. Verifique novamente.");
        $("#Text").val("");
        a = Math.floor(Math.random()*nums.length);
        b = Math.floor(Math.random()*nums.length);
        c = Math.floor(Math.random()*oper.length);
        ind1 = nums[a];
        ind2 = nums[b];
        op = oper[c];
        if(op=='+'){
            resul = ind1+ind2;
        }else if(op=='-'){
            resul = ind1-ind2;
        };
        $("#Question").html("Qual o resultado de " + ind1 + " " + op + " " + ind2 + "?");
    };
};

function reset(){
    $("#Txt1").val("");
    $("#Txt2").val("");
    $("#Txt3").val("");
    $("#Txt4").val("");
    $("#Txt5").val("");
    $("input:checkbox").val(["Marcou7"]).prop("checked", false);
    $("#box2").hide("fast");
    $("#box1").show("fast");
    $("#Slct1").val("Selecione");
    $("#Slct2").val("Selecione");
    $("#Dte").val("");
};

function send1(){
    if(
    $("#Txt1").val() != "" && 
    $("#Txt2").val().length == 10 || $("#Txt2").val().length == 11 &&
    $("#Txt3").val() != "" &&
    $("#Txt4").val() != ""
    ){
    var info1 = $("#Txt1").val();
    var info2 = $("#Txt2").val();
    var info3 = $("#Txt3").val();
    var info4 = $("#Txt4").val();
    var info5 = $("#Slct1").val();
    var info6 = $("#Txt5").val();
    var info7 = $("#Slct2").val();
    var info8 = $("#Dte").val();
    var info9 = $("#Txt6").val();
    $.post("recebe.php",{
        v1:info1,
        v2:info2,
        v3:info3,
        v4:info4,
        v5:info5,
        v6:info6,
        v7:info7,
        v8:info8,
        v9:info9
    })
    .done(function(retorno){
        alert(retorno);
        $("#Txt1").val("");
        $("#Txt2").val("");
        $("#Txt3").val("");
        $("#Txt4").val("");
        $("#Txt5").val("");
        $("input:checkbox").val(["Marcou7"]).prop("checked", false);
        $("#Slct1").val("Selecione");
        $("#Slct2").val("Selecione");
        $("#Dte").val("");
    },"json")
    .fail(function(cod,textStatus,msg){
        alert("Erro no envio dos dados. \nErro: " + cod + "\nStatus: " + textStatus + "\nMensagem: " + msg);
    })
    }else{
        alert("Um ou mais campos estão preenchidos incorretamente. Verifique novamente.");
    };
};