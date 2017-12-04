/**
 * Created by windy on 17-5-31.
 */
//TODO: 请补完下面的函数以完成需求.
function printInventory(inputs) {

    var str = '***<没钱赚商店>购物清单***'+'\n';

    var str = '***<没钱赚商店>购物清单***'+'\n';
    var a = [5,2,1]
    for(var i = 0; i < inputs.length; i++)
        str += '名称'+':'+inputs[i].name+','+'数量'+':'+a[i]+inputs[i].unit+','+'单价'+':'
            +inputs[i].price+'.00'+'(元)'+','+'小计'+':'+a[i]*inputs[i].price+'.00'+'(元)'+'\n';
    console.log(str)

}
var inputs = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.0,
        count: 1
    }
];

printInventory(inputs);