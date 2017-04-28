const gulp = require('gulp')
const template = require('gulp-template')

const { list } = require('./list')
const { root } = require('./conf')

const domains = list.map((item) => {
  return item[0] + `.${root}`
}).sort()



gulp.task('default', () =>
  gulp.src('template/**/*')
    .pipe(template({
      domains: `${root},${domains.join(',')}`,
      list,
      root
    }))
    .pipe(gulp.dest('dist'))
)
