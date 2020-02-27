// const api = jQuery(".test"); // 不返回dom元素，返回api对象
// api.addClass("red"); // 遍历所有的elements, 添加className .red
// api.addClass('blue').addClass('purple') // 链式操作

// // obj.fn(p) === obj.fn.call(obj, p), this 指向 obj

jQuery(".test")
  .find(".child")
  .addClass("red")
  .end()
  .addClass("yellow")
  .each(div => {
    console.log(div);
  })
  //.parent().print()
  .children()
  .print();
