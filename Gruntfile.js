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
	    // ����һ�����ڲ���ϲ�����ļ�֮����ַ�
	    separator: ';'
	  },
	  dist: {
	    // ��Ҫ���ϲ����ļ�
	    src: ['js/*.js', 'bower_components/iscroll/build/iscroll.js'],
	    // �ϲ����JS�ļ��Ĵ��λ��
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