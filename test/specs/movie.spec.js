(function () {
	define(['movie'], function (Movie) {
		describe('Movie', function () {
			var movie;
			beforeEach(function () {
				movie = new Movie({
					title: 'Kung Pow!',
					year: 2000
				});
			});
			it('should populate the title', function () {
				expect(movie.get('title')).toEqual('Kung Pow!');
			});
			it('should populate the year', function () {
				expect(movie.get('year')).toEqual(2000);
			});
		});
	});
}());