$(document).ready(function () {
    var provinceFlag = false;
    var tj = $("#registerBtn").click(function(){
        //邮箱
        var email=document.getElementById("email");
        if(email.validity.valueMissing==true){
            email.setCustomValidity("邮箱不能为空");
        }
        else if(email.validity.patternMismatch==true){
            email.setCustomValidity("邮箱格式不正确");
        }
        else{
            email.setCustomValidity("");
        }
    //用户名
        var nickName=document.getElementById("nickName");
        if(nickName.validity.valueMissing==true){
            nickName.setCustomValidity("用户名不能为空");
        }
        else if(nickName.validity.patternMismatch==true){
            nickName.setCustomValidity("用户名为4-20位的字母和数字");
        }
        else{
            nickName.setCustomValidity("");
        }
    //密码
            var pwd=document.getElementById("pwd");
            if(pwd.validity.valueMissing==true){
                pwd.setCustomValidity("密码不能为空");
            }
            else if(pwd.validity.patternMismatch==true){
                pwd.setCustomValidity("密码为6-20位的字母和数字");
            }
            else{
                pwd.setCustomValidity("");
            }
            var repwd=document.getElementById("repwd");
            if(repwd.validity.valueMissing==true){
                repwd.setCustomValidity("确认密码不能为空");
            }
            else if(repwd.value != pwd.value){
                repwd.setCustomValidity("两次输入密码不一致");
            }
            else{
                repwd.setCustomValidity("");
            }
    })
    //省市级联
    var cityList = new Array();
    cityList['北京市'] = ['朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
    cityList['上海市'] = ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
    cityList['广州省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
    cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
    cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
    cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
    cityList['江苏省'] = ['南京市','苏州市','无锡市'];
    cityList['浙江省'] = ['杭州市','宁波市','温州市'];
    cityList['四川省'] = ['四川省','成都市'];
    cityList['海南省'] = ['海口市'];
    cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
    cityList['山东省'] = ['济南市','青岛市','烟台市'];
    cityList['江西省'] = ['江西省','南昌市'];
    cityList['广西省'] = ['柳州市','南宁市'];
    cityList['安徽省'] = ['安徽省','合肥市'];
    cityList['河北省'] = ['邯郸市','石家庄市'];
    cityList['河南省'] = ['郑州市','洛阳市'];
    cityList['湖北省'] = ['武汉市','宜昌市'];
    cityList['湖南省'] = ['湖南省','长沙市'];
    cityList['陕西省'] = ['陕西省','西安市'];
    cityList['山西省'] = ['山西省','太原市'];
    cityList['黑龙江省'] = ['黑龙江省','哈尔滨市'];
    cityList['其他'] = ['其他'];
    //通过foreach的形式遍历
    for (var index in cityList) {
        $("#province").append("<option value='"+index+"'>"+index+"</option>");
    }
    //2. 选择不同的省份，二级下拉列表（城市）发生对应的变化。
    //给一级select添加change事件
    /*        var provinceFlag = false;*/
    $("#province").change(function () {
        $("#city").html("");//清空二级类表
        //获取1级类表的值
        var value = $(this).val();
        if(value == ""){
            provinceFlag = false;
            $("#city").append("<option value=''>请选择城市/地区</option>");
            $(this).parent().next().next().text("请选择所在地区。")
            return;
        }
        var secondArray = cityList[value];
        //遍历二级列表
        for (var index in secondArray) {
            $("#city").append("<option value='"+secondArray[index]+"'>"+secondArray[index]+"</option>")
        }
        provinceFlag = true;
        $(this).parent().next().next().text("");
        return provinceFlag;
    })
    //表单校验
    $("#myform").submit(function () {
        if (provinceFlag){
            return true;
        }
        alert("请选择所在地区！");
        return false;
    })
    })