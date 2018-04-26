
var gulp      = require( 'gulp' );
var sass      = require( 'gulp-sass' );
var rename    = require( 'gulp-rename' );
var styledown = require( 'gulp-styledown' );

gulp.task( 'sass', function () {

    return gulp.src( 'src/**/*.scss' ) // Source files.
        .pipe( sass() )                // Using gulp-sass.
        .pipe( gulp.dest( 'dist' ) )   // Destination.

} );

gulp.task( 'sass-min', function () {

    return gulp.src( 'src/**/*.scss' )
        .pipe( sass( { outputStyle: 'compressed' } ) )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( gulp.dest( 'dist' ) )

} );

var config   = 'guide/config.md';
var template = [
        '<!doctype html>',
        '<html lang="en">',
        '<head>',
        '<meta charset="utf-8">',
        '<title>CSS Starter Kit Guide</title>',
        '</head>',
        '<body>',
        '</body>',
        '</html>'
    ].join( '\n' );

var dest = 'guide';

var prefix_components = 'components-';
var prefix_elements   = 'elements-';
var prefix_helpers    = 'helpers-';
var prefix_layout     = 'layout-';

gulp.task( 'styledown', function () {

    gulp.src( 'guide/index.md' )    // /path/to/styledown/*.md
        .pipe( styledown( {
            config:   config,       // /path/to/config.md
            template: template,
            filename: 'index.html'  // output.html
        } ) )
        .pipe( gulp.dest( dest ) ); // /path/to/


    // Components

    gulp.src( 'dist/components/card.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_components + 'card.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/components/collapse.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_components + 'collapse.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/components/drawer.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_components + 'drawer.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/components/menu.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_components + 'menu.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/components/modal.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_components + 'modal.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/components/navbar.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_components + 'navbar.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/components/navmenu.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_components + 'navmenu.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/components/tabs.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_components + 'tabs.html' } ) )
        .pipe( gulp.dest( dest ) );


    // Elements

    gulp.src( 'dist/elements/base.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'base.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/box.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'box.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/button.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'button.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/button-group.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'button-group.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/file-area.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'file-area.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/form.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'form.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/input-group.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'input-group.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/list.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'list.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/switch.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'switch.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/table.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'table.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/elements/toolbar.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_elements + 'toolbar.html' } ) )
        .pipe( gulp.dest( dest ) );


    // Helpers

    gulp.src( 'dist/helpers/border.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'border.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/helpers/border-radius.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'border-radius.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/helpers/border-style.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'border-style.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/border-width.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'border-width.html' } ) )
        .pipe( gulp.dest( dest ) );
 
    gulp.src( 'dist/helpers/box-shadow.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'box-shadow.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/clearfix.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'clearfix.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/color.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'color.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/display.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'display.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/float.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'float.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/font-size.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'font-size.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/font-weight.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'font-weight.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/margin.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'margin.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/opacity.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'opacity.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/padding.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'padding.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/position.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'position.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/text-align.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'text-align.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/text-transform.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'text-transform.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/text.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'text.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/visibility.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'visibility.html' } ) )
        .pipe( gulp.dest( dest ) );
        
    gulp.src( 'dist/helpers/width.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_helpers + 'width.html' } ) )
        .pipe( gulp.dest( dest ) );


    // Layout

    gulp.src( 'dist/layout/flex-direction.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'flex-direction.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/layout/flex-grid.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'flex-grid.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/layout/flex-grow.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'flex-grow.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/layout/gutter.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'gutter.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/layout/modifier-horizontal.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'modifier-horizontal.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/layout/modifier-vertical.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'modifier-vertical.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/layout/offset.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'offset.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/layout/order.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'order.html' } ) )
        .pipe( gulp.dest( dest ) );

    gulp.src( 'dist/layout/grid.css' )
        .pipe( styledown( { config: config, template: template, filename: prefix_layout + 'grid.html' } ) )
        .pipe( gulp.dest( dest ) );

} );

// Watch task.

gulp.task( 'default', function () {

    gulp.watch( 'src/**/*.scss', [ 'sass', 'sass-min', 'styledown' ] );
    gulp.watch( 'config.md', [ 'styledown' ] );

} );
