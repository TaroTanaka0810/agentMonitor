(function($) {
    $.fn.sortableInit = function(){
        var elements = this;

        var sortKeyClass = [
            'sort_number',
            'sort_number_attr1',
            'sort_number_attr2',
            'sort_number_attr3',
            'sort_number_attr4',
            'sort_number_attr5',
            'sort_number_attr6',
            'sort_number_attr7',
            'sort_number_attr8',
            'sort_number_attr9',
            'sort_number_attr10'

        ];

        elements.each(function(){
            $(this).find('thead').find('tr:last').find('th').each(function(index){
                var self = this;
                // console.log("index:"+index)
                // 対象クラスを持たない列にはソートボタンを表示しない
                if(!sortKeyClass.some(function(v){
                    return $(self).hasClass(v);
                })) return this;

                var func = null;
                var isAttr = new Array(sortKeyClass.length);
                // 数値型
                if ($(this).hasClass('sort_number')) {
                    func = mergeSortNumber;
                    isAttr[0] = false;
                }
                // // 属性数値型
                // else if ($(this).hasClass('sort_number_attr')) {
                //     func = mergeSortNumber;
                //     isAttr = true;
                // }
                for(var i=1;i<sortKeyClass.length;i++){
                    if($(this).hasClass('sort_number_attr' + i)){
                        func = mergeSortNumber;
                        isAttr[i] = true;
                        break;
                    }
                }

                var ascObj = $('<span>').html('▲').click(function(){
                    $(this).sortable(index, true, func, isAttr);
                }).css({"cursor":"pointer"});
                var descObj = $('<span>').html('▼').click(function(){
                    $(this).sortable(index, false, func, isAttr);
                }).css({"cursor":"pointer"});
                $(this).append($('<div>').addClass('sort_cursor').append(ascObj).append(descObj));
                // $(this).find('<div>').css('display:inline-block;');
            });
        });

        return this;
    };

    $.fn.sortable = function(index, isAsc, func, isAttr){
        var element = this;

        var tbody = element.closest('table').find('tbody');
        // 色付けクラス削除
        tbody.find('td').removeClass('sort_by_asc sort_by_desc');
        var trs = [];
        tbody.find('tr').each(function(i){
            trs[i] = this;
        });
        trs = func(trs, index, isAsc, isAttr);
        tbody.empty().append(trs);
        // 色付けクラス追加
        tbody.find('tr').each(function(){
            $(this).find('td').eq(index).addClass(isAsc ? 'sort_by_asc' : 'sort_by_desc');
        });
        return this;
    };

    function mergeSortNumber(a, index, isAsc, isAttr) {
        var split = function(array) {
                if (array.length < 2) {
                    return array;
                }
                // console.log(array)
                var a, b, mid = array.length / 2 | 0;
                a = split(array.slice(0, mid));
                b = split(array.slice(mid, array.length));
                // console.log(a);

                return merge(array, a, b);
            },
            merge = function(array, a, b) {
                // console.log(index)
                if (b === void 0) {
                    return array;
                }
                var c = [], i, j;
                while (a.length > 0 && b.length > 0) {
                    var judge = judgeAttr(isAttr);
                    // console.log(judge);
                    if (judge[0] == true) {
                        // console.log("hoge")
                        i = getValueAttr(a[0], index,judge[1]);
                        j = getValueAttr(b[0], index,judge[1]);
                        // console.log(i)
                    }
                    else {
                        // console.log("a[0]:" + a[0] + " b[0]:"+b[0])
                        i = getValueHtml(a[0], index);
                        j = getValueHtml(b[0], index);
                        // console.log(i+":"+j);

                    }

                    if (isAsc) {
                        if (i <= j) {
                            c.push(a.shift());
                        } else {
                            c.push(b.shift());
                        }
                    } else {
                        if (i >= j) {
                            c.push(a.shift());
                        } else {
                            c.push(b.shift());
                        }
                    }
                }
                if (a.length === 0) {
                    c = c.concat(b);
                } else if (b.length === 0) {
                    c = c.concat(a);
                }
                return c;
            }
        return split(a);
    }

    function getValueHtml(tag, index) {
         // console.log(1 * $(tag).find('td').eq(index).html());
        if(!(1 * $(tag).find('th,td').eq(index).html())){
            // console.log("in");
            return $(tag).find('th,td').eq(index).html();
        } else {
            return 1 * $(tag).find('th,td').eq(index).html();

        }
        
    } 
    function getValueAttr(tag, index,num) {
        // console.log($(tag).find('td').eq(index).attr('sort-value'+num));
        return  $(tag).find('td').eq(index).attr('sort-value'+num);
    } 
    function judgeAttr(isAttr){
        for(var i=1;i<isAttr.length;i++){
            if(isAttr[i] == true){
                return [true,i];
            }
        }
        return [false,0];
    }
})(jQuery);