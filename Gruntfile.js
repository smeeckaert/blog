module.exports = function (grunt) {

    grunt.initConfig({
        sass       : {
            options: {
                sourceMap: true
            },
            dist   : {
                files: {
                    'static/css/blog.css': 'assets/sass/blog.scss'
                }
            }
        },
        "uglify" : {
            "options"  : {
                "separator": ";"
            },
            "my_target": {
                "files": {
                    "static/js/build.min.js": [
                        "assets/js/jquery.js",
                        "assets/js/**/*.js"
                    ]
                }
            }
        },
        watch      : {
            js         : {
                files: [
                    "assets/js/**/*.js"
                ],
                "tasks": ["uglify"]
            },
            sass      : {
                files: ['assets/**/*.scss'],
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);

};