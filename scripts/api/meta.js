var Meta = (() => {
	
	var getCities = () => Api.httpGet('meta/cities/');
	
	var getLocalitiesByCity = (city) => Api.httpGet('meta/localities?city=' + city);
	
	var getStates = () => Api.httpGet('meta/states/');
	
	var getBuildingTypes = () => Api.httpGet('meta/buildingtypes/');
	
	var getLocationTypes = () => Api.httpGet('meta/locationtype/');
	
	var getBuildingAmenities = () => Api.httpGet('meta/buildingamenities/');
	
	var getRoomTypes = () => Api.httpGet('meta/roomtypes/');

	return {
		getCities,
		getLocalitiesByCity,
		getStates,
		getBuildingTypes,
		getLocationTypes,
		getBuildingAmenities,
		getRoomTypes
	}
})();
