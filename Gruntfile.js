module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /**
    bower_concat: {
  	  all: {
  	    dest: 'dist/<%= pkg.name %>.js',
  	  }
    }, 
    */  
    concat: {
	  options: {
	    // 定义一个用于插入合并输出文件之间的字符
	    separator: ';'
	  },
	  dist: {
	    // 将要被合并的文件
	    src: ['js/*.js', 'bower_components/iscroll/build/iscroll.js'],
	    // 合并后的JS文件的存放位置
	    dest: 'dist/<%= pkg.name %>.js'
	  }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    }
  });

  // Loaded 'bower_concat' plugin.
  //grunt.loadNpmTasks('grunt-bower-concat');
  
  // Loaded 'concat' plugin.
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // Loaded 'uglify' plugin.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // The default of exec list.
  grunt.registerTask('default', ['concat', 'uglify']);

};