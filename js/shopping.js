$(document).ready(function () {
    initPrice();
    function initPrice() {
        //显示遍历集合each
        var weilanPrice = 0;//蔚蓝价
        var shichangPrice = 0;//市场价
        var jifenTotal = 0;//总积分
        //蔚蓝总价
        $(".shopping_product_list_4>label").each(function () {
            var price = parseFloat($(this).text());
            //拿数量
            var count = $(this).parent().next().children("input").val();
            weilanPrice += (price * count);
        })
        //市场总价
        $(".shopping_product_list_3>label").each(function () {
            var price = parseFloat($(this).text());
            //拿数量
            var count = $(this).parent().next().next().children("input").val();
            shichangPrice += (price * count);
        })
        //总共积分
        $(".shopping_product_list_2>label").each(function () {
            var jifen = parseFloat($(this).text());
            jifenTotal += jifen;
        })
        //给蔚蓝价赋值
        $("#product_total").text(weilanPrice.toFixed(1));
        //(节省多少钱)
        $("#product_save").text((shichangPrice-weilanPrice).toFixed(1));
        //总积分赋值
        $("#product_integral").text(jifenTotal);
    }
    //删除商品
    $(".shopping_product_list_6>a").click(function () {
        var flag = confirm("是否要删除该商品？");
        if (flag){
            $(this).parent().parent().remove();
            initPrice();//重新计算价格信息
        }
    })
    //结算按钮
    $(".shopping_list_end ul li:eq(0) input").click(function () {
        initPrice();//重新计算价格信息
    })
    //清空购物车
    $("#removeAllProduct").click(function () {
        var flag = confirm("是否要清空购物车？");
        if (flag){
            $("#myTableProduct tbody tr").remove();
            initPrice();//重新计算价格信息
        }
    })
    //修改数量
    var index = $(".shopping_product_list_5>input").index(this);
    var ysz = $(".shopping_product_list_5>input:eq("+index+")").val();
    $(".shopping_product_list_5>input").change(function () {
        var value = $(this).val();
        //判断值是否合法，只能输入正整数。
        var reg = /^[1-9][0-9]*$/;
        if (!reg.test(value)){
            alert("只能输入正整数！");
            $(this).val(ysz);
        }
        initPrice();//重新计算价格信息
    })
})









