export const OrderFunctions = {
	organiser_desc: function(a, b){
	if (a.organiser < b.organiser)
	  return -1;
	else if (a.organiser > b.organiser)
	  return 1;
	else 
	  return 0;
	},
	organiser_asc: function(a, b){
	if (a.organiser < b.organiser)
	  return 1;
	else if (a.organiser > b.organiser)
	  return -1;
	else 
	  return 0;
	},
	title_desc: function(a, b){
	if (a.title < b.title)
	  return -1;
	else if (a.title > b.title)
	  return 1;
	else 
	  return 0;
	},
	title_asc: function(a, b){
	if (a.title < b.title)
	  return 1;
	else if (a.title > b.title)
	  return -1;
	else 
	  return 0;
	},
	date_desc: function(a,b){
	if (a.eventDate < b.eventDate)
	  return -1;
	else if (a.eventDate > b.eventDate)
	  return 1;
	else 
	  return 0;
	},
	date_asc: function(a,b){
	if (a.eventDate < b.eventDate)
	  return 1;
	else if (a.eventDate > b.eventDate)
	  return -1;
	else 
	  return 0;
	}
};