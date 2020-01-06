const config = {
	"gatsby": {
		"pathPrefix": "/help-static/",
		"siteUrl":'https://www.qushow365.com/help',
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://sta.qushow365.com/public/logo.svg",
		"title": "帮助中心",
		"helpUrl": "",
		"links": [
			{ "text": "", "link": ""}
		],
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
		"links": [
			{ "text": "", "link": ""},
		]
	},
	"siteMetadata": {
		"title": "帮助中心 | 趣show",
		"description": "趣show帮助中心 ",
		"ogImage": null,
		"siteUrl":'https://www.qushow365.com/help',
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
};

module.exports = config;