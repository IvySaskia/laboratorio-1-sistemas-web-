// Vue.component('carousel-component', {
//   render: function (createElement) {
//     return createElement('div', { class: 'carousel-component' },
//                          this.items.map((item, index) =>
//                                         createElement('div', {
//       'class': 'carousel-page' + (this.current === index ? ' active' : ''),
//       style: {
//         transform: `translate3d(${this.position(index) * 100}%, 0, 0)`,
//       }
//     }, [item])
//                                        ).concat([
//       createElement('button', {
//         'class': 'carousel-nav-prev',
//         on: { click: () => { this.decreaseCurrent(); } }
//       }, 'Prev'),
//       createElement('button', {
//         'class': 'carousel-nav-next',
//         on: { click: () => { this.increaseCurrent(); } }
//       }, 'Next')
//     ])
//                         );
//   },
//   data: function() {
//     return {
//       current: 0
//     };
//   },
//   computed: {
//     items: function() {
//       return this.$slots.default.filter(function(item) {
//         return item.componentOptions !== undefined &&
//           item.componentOptions.tag === 'carousel-item';
//       });
//     }
//   },
//   methods: {
//     decreaseCurrent: function() {
//       this.current += this.items.length - 1;
//       this.current %= this.items.length;
//     },
//     increaseCurrent: function() {
//       this.current += 1;
//       this.current %= this.items.length;
//     },
//     position: function(index) {
//       if (index === this.current) return 0;
//       if (index === (this.current + 1) % this.items.length) return 1;
//       return -1;
//     }
//   }
// });

// Vue.component('carousel-item', {
//   render: function (createElement) {
//     return createElement('div', { class: 'carousel-item' }, this.$slots.default);
//   }
// });

// new Vue({
//   el: '#app'
// });
