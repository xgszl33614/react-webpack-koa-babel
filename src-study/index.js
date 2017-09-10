// import B from './b'

class A {
  num = 1

  static a() {
    return this === A
  }

  static b = () => {
    console.log('')
    return this
  }

  c() {
    return this.num
  }

  d = () => this.num
}
const a = new A()
console.log(A.a())
console.log(A.b())
console.log(a.c())
console.log(a.d())


// console.log(B.a)

/* ---------------------------------------------------- */
// 对象调用，arrow func 与 普通函数的对比
const o = {

  // b() {
  //   setTimeout(() => console.log(this === o), 0)
  // },
  //
  // c() {
  //   setTimeout(function() { console.log(this === window) }, 0)
  // },
  //
  // d() {
  //   setTimeout(function() { console.log(this === o) }.bind(this), 0)
  // },

  e: () => {
    console.log('e() === ', this === undefined)
  },

  f() {
    (() => { console.log('f() === ', this === o) })()
  },

  f2() {
    (() => { console.log('f2() === ', this === o) }).bind(window)()
  },

  g() {
    (function () { console.log('g() === ', this === undefined) })()
  },

  g2() {
    (function () { console.log('g2() === ', this === window) }.bind(window))()
  }
}

// o.b()
// o.c()
// o.d()
// o.e()
o.e()
o.f()
o.f2()
o.g()
o.g2()

/* -----------------------------------------------------------*/
