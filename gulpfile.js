const gulp = require('gulp')
const template = require('gulp-template')

const { list } = require('./list')

const domains = list.map((item) => {
  return item[0] + '.teemo.top'
}).sort()



gulp.task('default', () =>
  gulp.src('template/**/*')
    .pipe(template({
      domains: 'teemo.top,' + domains.join(','),
      list
    }))
    .pipe(gulp.dest('dist'))
)
