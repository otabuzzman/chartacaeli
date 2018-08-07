/*
top-level elements are supposed to create by start(). no add/ delete methods.
other elements have both methods but delete only if there are no child elements
to prevent from accidential removal of possibly large structures.
drawback is some inconvenience in case of intended removal of those structures
as this has to be done element by element and layer by layer starting bottom-up.
 */

var docSpec = {
	elements: {
		"CatalogADC1239H": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@url",
				action: Xonomy.newAttribute,
				actionParameter: {name: "url"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("url");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"url": {
					asker: Xonomy.askString
				}
			}
		},
		"CatalogADC1239T": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@url",
				action: Xonomy.newAttribute,
				actionParameter: {name: "url"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("url");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"url": {
					asker: Xonomy.askString
				}
			}
		},
		"CatalogADC5050": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@url",
				action: Xonomy.newAttribute,
				actionParameter: {name: "url"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("url");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"url": {
					asker: Xonomy.askString
				}
			}
		},
		"CatalogADC5109": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@url",
				action: Xonomy.newAttribute,
				actionParameter: {name: "url"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("url");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"url": {
					asker: Xonomy.askString
				}
			}
		},
		"CatalogADC6049": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@url",
				action: Xonomy.newAttribute,
				actionParameter: {name: "url"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("url");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"url": {
					asker: Xonomy.askString
				}
			}
		},
		"CatalogADC7118": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@url",
				action: Xonomy.newAttribute,
				actionParameter: {name: "url"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("url");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"url": {
					asker: Xonomy.askString
				}
			}
		},
		"CatalogADC7237": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@url",
				action: Xonomy.newAttribute,
				actionParameter: {name: "url"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("url");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"url": {
					asker: Xonomy.askString
				}
			}
		},
		"CatalogDS9": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@url",
				action: Xonomy.newAttribute,
				actionParameter: {name: "url"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("url");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"url": {
					asker: Xonomy.askString
				}
			}
		},
		"Script": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@value",
				action: Xonomy.newAttribute,
				actionParameter: {name: "value"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("value");
				}
			}, {
				caption: "add \@@purpose",
				action: Xonomy.newAttribute,
				actionParameter: {name: "purpose"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("purpose");
				}
			}, {
				caption: "@duplicate",
				action: Xonomy.duplicateElement
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"value": {
					asker: Xonomy.askString
				},
				"purpose": {
					asker: Xonomy.askOpenPicklist,
					askerParameter: [
						{value: "none"},
						{value: "bodylettering0"},
						{value: "bodylettering7"},
						{value: "titlelettering"},
						{value: "textlettering"},
						{value: "circlelettering"},
						{value: "diallettering"},
						{value: "dialcardinal"},
						{value: "dialfraction"},
						{value: "guidance"},
						{value: "obscure"}
					]
				}
			}
		},
		"Frame": {
			menu: [{
				caption: "add \@@anchor",
				action: Xonomy.newAttribute,
				actionParameter: {name: "anchor"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("anchor");
				}
			}, {
				caption: "add \@@number",
				action: Xonomy.newAttribute,
				actionParameter: {name: "number"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("number");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
			}],
			attributes: {
				"anchor": {
					asker: Xonomy.askOpenPicklist,
					askerParameter: [
						{value: "topleft"},
						{value: "topmiddle"},
						{value: "topright"},
						{value: "middleleft"},
						{value: "middle"},
						{value: "middleright"},
						{value: "bottomleft"},
						{value: "bottommiddle"},
						{value: "bottomright"}
					]
				},
				"number": {
					asker: Xonomy.askString
				}
			}
		},
		"CircleParallel": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@fieldofview",
				action: Xonomy.newAttribute,
				actionParameter: {name: "fieldofview"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("fieldofview");
				}
			}, {
				caption: "add \@@importance",
				action: Xonomy.newAttribute,
				actionParameter: {name: "importance"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("importance");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"fieldofview": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"importance": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "canonical"},
						{value: "cardinal"}
					]
				}
			}
		},
		"CircleMeridian": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@fieldofview",
				action: Xonomy.newAttribute,
				actionParameter: {name: "fieldofview"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("fieldofview");
				}
			}, {
				caption: "add \@@importance",
				action: Xonomy.newAttribute,
				actionParameter: {name: "importance"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("importance");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"fieldofview": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"importance": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "canonical"},
						{value: "cardinal"}
					]
				}
			}
		},
		"CircleSouthernPolar": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@fieldofview",
				action: Xonomy.newAttribute,
				actionParameter: {name: "fieldofview"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("fieldofview");
				}
			}, {
				caption: "add \@@importance",
				action: Xonomy.newAttribute,
				actionParameter: {name: "importance"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("importance");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"fieldofview": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"importance": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "canonical"},
						{value: "cardinal"}
					]
				}
			}
		},
		"CircleNorthernPolar": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@fieldofview",
				action: Xonomy.newAttribute,
				actionParameter: {name: "fieldofview"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("fieldofview");
				}
			}, {
				caption: "add \@@importance",
				action: Xonomy.newAttribute,
				actionParameter: {name: "importance"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("importance");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"fieldofview": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"importance": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "canonical"},
						{value: "cardinal"}
					]
				}
			}
		},
		"CircleSouthernTropic": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@fieldofview",
				action: Xonomy.newAttribute,
				actionParameter: {name: "fieldofview"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("fieldofview");
				}
			}, {
				caption: "add \@@importance",
				action: Xonomy.newAttribute,
				actionParameter: {name: "importance"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("importance");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"fieldofview": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"importance": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "canonical"},
						{value: "cardinal"}
					]
				}
			}
		},
		"CircleNorthernTropic": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@fieldofview",
				action: Xonomy.newAttribute,
				actionParameter: {name: "fieldofview"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("fieldofview");
				}
			}, {
				caption: "add \@@importance",
				action: Xonomy.newAttribute,
				actionParameter: {name: "importance"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("importance");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"fieldofview": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"importance": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "canonical"},
						{value: "cardinal"}
					]
				}
			}
		},
		"BodyStellar": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@turn",
				action: Xonomy.newAttribute,
				actionParameter: {name: "turn"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("turn");
				}
			}, {
				caption: "add \@@spin",
				action: Xonomy.newAttribute,
				actionParameter: {name: "spin"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("spin");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"turn": {
					asker: Xonomy.askString
				},
				"spin": {
					asker: Xonomy.askString
				}
			}
		},
		"BodyAreal": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@nature",
				action: Xonomy.newAttribute,
				actionParameter: {name: "nature"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("nature");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"nature": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "arbitrary"},
						{value: "authentic"}
					]
				}
			}
		},
		"BodyPlanet": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@stretch",
				action: Xonomy.newAttribute,
				actionParameter: {name: "stretch"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("stretch");
				}
			}, {
				caption: "add \@@nature",
				action: Xonomy.newAttribute,
				actionParameter: {name: "nature"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("nature");
				}
			}, {
				caption: "add \@@type",
				action: Xonomy.newAttribute,
				actionParameter: {name: "type"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("type");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"stretch": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"nature": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "artificial"},
						{value: "celestial"}
					]
				},
				"type": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "mercury"},
						{value: "venus"},
						{value: "mars"},
						{value: "jupiter"},
						{value: "saturn"},
						{value: "uranus"},
						{value: "neptune"}
					]
				}
			}
		},
		"BodyMoon": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@stretch",
				action: Xonomy.newAttribute,
				actionParameter: {name: "stretch"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("stretch");
				}
			}, {
				caption: "add \@@nature",
				action: Xonomy.newAttribute,
				actionParameter: {name: "nature"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("nature");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"stretch": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"nature": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "artificial"},
						{value: "celestial"}
					]
				}
			}
		},
		"BodySun": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@stretch",
				action: Xonomy.newAttribute,
				actionParameter: {name: "stretch"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("stretch");
				}
			}, {
				caption: "add \@@nature",
				action: Xonomy.newAttribute,
				actionParameter: {name: "nature"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("nature");
				}
			}, {
				caption: "add \@@type",
				action: Xonomy.newAttribute,
				actionParameter: {name: "type"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("type");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"stretch": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"nature": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "artificial"},
						{value: "celestial"}
					]
				},
				"type": {
					asker: Xonomy.askOpenPicklist,
					askerParameter: [
						{value: "mean"},
						{value: "true"}
					]
				}
			}
		},
		"BodyElliptical": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@stretch",
				action: Xonomy.newAttribute,
				actionParameter: {name: "stretch"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("stretch");
				}
			}, {
				caption: "add \@@nature",
				action: Xonomy.newAttribute,
				actionParameter: {name: "nature"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("nature");
				}
			}, {
				caption: "add \@@a",
				action: Xonomy.newAttribute,
				actionParameter: {name: "a"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("a");
				}
			}, {
				caption: "add \@@e",
				action: Xonomy.newAttribute,
				actionParameter: {name: "e"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("e");
				}
			}, {
				caption: "add \@@i",
				action: Xonomy.newAttribute,
				actionParameter: {name: "i"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("i");
				}
			}, {
				caption: "add \@@o",
				action: Xonomy.newAttribute,
				actionParameter: {name: "o"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("o");
				}
			}, {
				caption: "add \@@w",
				action: Xonomy.newAttribute,
				actionParameter: {name: "w"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("w");
				}
			}, {
				caption: "add \@@T",
				action: Xonomy.newAttribute,
				actionParameter: {name: "T"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("T");
				}
			}, {
				caption: "add \@@equinox",
				action: Xonomy.newAttribute,
				actionParameter: {name: "equinox"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("equinox");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"stretch": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"nature": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "artificial"},
						{value: "celestial"}
					]
				},
				"a": {
					asker: Xonomy.askString
				},
				"e": {
					asker: Xonomy.askString
				},
				"i": {
					asker: Xonomy.askString
				},
				"o": {
					asker: Xonomy.askString
				},
				"w": {
					asker: Xonomy.askString
				},
				"T": {
					asker: Xonomy.askString
				},
				"equinox": {
					asker: Xonomy.askString
				}
			}
		},
		"BodyParabolical": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@stretch",
				action: Xonomy.newAttribute,
				actionParameter: {name: "stretch"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("stretch");
				}
			}, {
				caption: "add \@@nature",
				action: Xonomy.newAttribute,
				actionParameter: {name: "nature"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("nature");
				}
			}, {
				caption: "add \@@q",
				action: Xonomy.newAttribute,
				actionParameter: {name: "q"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("q");
				}
			}, {
				caption: "add \@@i",
				action: Xonomy.newAttribute,
				actionParameter: {name: "i"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("i");
				}
			}, {
				caption: "add \@@o",
				action: Xonomy.newAttribute,
				actionParameter: {name: "o"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("o");
				}
			}, {
				caption: "add \@@w",
				action: Xonomy.newAttribute,
				actionParameter: {name: "w"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("w");
				}
			}, {
				caption: "add \@@T",
				action: Xonomy.newAttribute,
				actionParameter: {name: "T"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("T");
				}
			}, {
				caption: "add \@@equinox",
				action: Xonomy.newAttribute,
				actionParameter: {name: "equinox"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("equinox");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"stretch": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"nature": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "artificial"},
						{value: "celestial"}
					]
				},
				"q": {
					asker: Xonomy.askString
				},
				"i": {
					asker: Xonomy.askString
				},
				"o": {
					asker: Xonomy.askString
				},
				"w": {
					asker: Xonomy.askString
				},
				"T": {
					asker: Xonomy.askString
				},
				"equinox": {
					asker: Xonomy.askString
				}
			}
		},
		"DMS": {
			menu: [{
				caption: "add \@@neg",
				action: Xonomy.newAttribute,
				actionParameter: {name: "neg"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("neg");
				}
			}, {
				caption: "add \@@deg",
				action: Xonomy.newAttribute,
				actionParameter: {name: "deg"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("deg");
				}
			}, {
				caption: "add \@@min",
				action: Xonomy.newAttribute,
				actionParameter: {name: "min"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("min");
				}
			}, {
				caption: "add \@@sec",
				action: Xonomy.newAttribute,
				actionParameter: {name: "sec"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("sec");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement
			}],
			attributes: {
				"neg": {
					asker: Xonomy.askString
				},
				"deg": {
					asker: Xonomy.askString
				},
				"min": {
					asker: Xonomy.askString
				},
				"sec": {
					asker: Xonomy.askString
				}
			}
		},
		"Catalog": {
			menu: [{
				caption: "add <CatalogADC1239H>",
				action: Xonomy.newElementChild,
				actionParameter: "<CatalogADC1239H/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CatalogADC1239H") ||
								jsElement.hasChildElement("CatalogADC1239T") ||
								jsElement.hasChildElement("CatalogADC5050") ||
								jsElement.hasChildElement("CatalogADC5109") ||
								jsElement.hasChildElement("CatalogADC6049") ||
								jsElement.hasChildElement("CatalogADC7118") ||
								jsElement.hasChildElement("CatalogADC7237") ||
								jsElement.hasChildElement("CatalogDS9");
				}
			}, {
				caption: "add <CatalogADC1239T>",
				action: Xonomy.newElementChild,
				actionParameter: "<CatalogADC1239T/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CatalogADC1239H") ||
								jsElement.hasChildElement("CatalogADC1239T") ||
								jsElement.hasChildElement("CatalogADC5050") ||
								jsElement.hasChildElement("CatalogADC5109") ||
								jsElement.hasChildElement("CatalogADC6049") ||
								jsElement.hasChildElement("CatalogADC7118") ||
								jsElement.hasChildElement("CatalogADC7237") ||
								jsElement.hasChildElement("CatalogDS9");
				}
			}, {
				caption: "add <CatalogADC5050>",
				action: Xonomy.newElementChild,
				actionParameter: "<CatalogADC5050/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CatalogADC1239H") ||
								jsElement.hasChildElement("CatalogADC1239T") ||
								jsElement.hasChildElement("CatalogADC5050") ||
								jsElement.hasChildElement("CatalogADC5109") ||
								jsElement.hasChildElement("CatalogADC6049") ||
								jsElement.hasChildElement("CatalogADC7118") ||
								jsElement.hasChildElement("CatalogADC7237") ||
								jsElement.hasChildElement("CatalogDS9");
				}
			}, {
				caption: "add <CatalogADC5109>",
				action: Xonomy.newElementChild,
				actionParameter: "<CatalogADC5109/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CatalogADC1239H") ||
								jsElement.hasChildElement("CatalogADC1239T") ||
								jsElement.hasChildElement("CatalogADC5050") ||
								jsElement.hasChildElement("CatalogADC5109") ||
								jsElement.hasChildElement("CatalogADC6049") ||
								jsElement.hasChildElement("CatalogADC7118") ||
								jsElement.hasChildElement("CatalogADC7237") ||
								jsElement.hasChildElement("CatalogDS9");
				}
			}, {
				caption: "add <CatalogADC6049>",
				action: Xonomy.newElementChild,
				actionParameter: "<CatalogADC6049/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CatalogADC1239H") ||
								jsElement.hasChildElement("CatalogADC1239T") ||
								jsElement.hasChildElement("CatalogADC5050") ||
								jsElement.hasChildElement("CatalogADC5109") ||
								jsElement.hasChildElement("CatalogADC6049") ||
								jsElement.hasChildElement("CatalogADC7118") ||
								jsElement.hasChildElement("CatalogADC7237") ||
								jsElement.hasChildElement("CatalogDS9");
				}
			}, {
				caption: "add <CatalogADC7118>",
				action: Xonomy.newElementChild,
				actionParameter: "<CatalogADC7118/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CatalogADC1239H") ||
								jsElement.hasChildElement("CatalogADC1239T") ||
								jsElement.hasChildElement("CatalogADC5050") ||
								jsElement.hasChildElement("CatalogADC5109") ||
								jsElement.hasChildElement("CatalogADC6049") ||
								jsElement.hasChildElement("CatalogADC7118") ||
								jsElement.hasChildElement("CatalogADC7237") ||
								jsElement.hasChildElement("CatalogDS9");
				}
			}, {
				caption: "add <CatalogADC7237>",
				action: Xonomy.newElementChild,
				actionParameter: "<CatalogADC7237/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CatalogADC1239H") ||
								jsElement.hasChildElement("CatalogADC1239T") ||
								jsElement.hasChildElement("CatalogADC5050") ||
								jsElement.hasChildElement("CatalogADC5109") ||
								jsElement.hasChildElement("CatalogADC6049") ||
								jsElement.hasChildElement("CatalogADC7118") ||
								jsElement.hasChildElement("CatalogADC7237") ||
								jsElement.hasChildElement("CatalogDS9");
				}
			}, {
				caption: "add <CatalogDS9>",
				action: Xonomy.newElementChild,
				actionParameter: "<CatalogDS9/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CatalogADC1239H") ||
								jsElement.hasChildElement("CatalogADC1239T") ||
								jsElement.hasChildElement("CatalogADC5050") ||
								jsElement.hasChildElement("CatalogADC5109") ||
								jsElement.hasChildElement("CatalogADC6049") ||
								jsElement.hasChildElement("CatalogADC7118") ||
								jsElement.hasChildElement("CatalogADC7237") ||
								jsElement.hasChildElement("CatalogDS9");
				}
			}, {
				caption: "@duplicate",
				action: Xonomy.duplicateElement
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}]
		},
		"AnnotationStraight": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@anchor",
				action: Xonomy.newAttribute,
				actionParameter: {name: "anchor"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("anchor");
				}
			}, {
				caption: "add \@@reverse",
				action: Xonomy.newAttribute,
				actionParameter: {name: "reverse"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("reverse");
				}
			}, {
				caption: "add \@@radiant",
				action: Xonomy.newAttribute,
				actionParameter: {name: "radiant"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("radiant");
				}
			}, {
				caption: "add <Script>",
				action: Xonomy.newElementChild,
				actionParameter: "<Script/>",
			}, {
				caption: "add <Frame>",
				action: Xonomy.newElementChild,
				actionParameter: "<Frame/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Frame");
				}
			}, {
				caption: "@duplicate",
				action: Xonomy.duplicateElement
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"anchor": {
					asker: Xonomy.askOpenPicklist,
					askerParameter: [
						{value: "topleft"},
						{value: "topmiddle"},
						{value: "topright"},
						{value: "middleleft"},
						{value: "middle"},
						{value: "middleright"},
						{value: "bottomleft"},
						{value: "bottommiddle"},
						{value: "bottomright"}
					]
				},
				"reverse": {
					asker: Xonomy.askOpenPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					]
				},
				"radiant": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "true"},
						{value: "false"}
					]
				}
			},
			mustBeBefore: ["Circle", "Body", "Oblique", "Time", "Catalog"]
		},
		"Circle": {
			menu: [{
				caption: "add <CircleParallel>",
				action: Xonomy.newElementChild,
				actionParameter: "<CircleParallel/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CircleParallel") ||
								jsElement.hasChildElement("CircleMeridian") ||
								jsElement.hasChildElement("CircleSouthernPolar") ||
								jsElement.hasChildElement("CircleNorthernPolar") ||
								jsElement.hasChildElement("CircleSouthernTropic") ||
								jsElement.hasChildElement("CircleNorthernTropic");
				}
			}, {
				caption: "add <CircleMeridian>",
				action: Xonomy.newElementChild,
				actionParameter: "<CircleMeridian/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CircleParallel") ||
								jsElement.hasChildElement("CircleMeridian") ||
								jsElement.hasChildElement("CircleSouthernPolar") ||
								jsElement.hasChildElement("CircleNorthernPolar") ||
								jsElement.hasChildElement("CircleSouthernTropic") ||
								jsElement.hasChildElement("CircleNorthernTropic");
				}
			}, {
				caption: "add <CircleSouthernPolar>",
				action: Xonomy.newElementChild,
				actionParameter: "<CircleSouthernPolar/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CircleParallel") ||
								jsElement.hasChildElement("CircleMeridian") ||
								jsElement.hasChildElement("CircleSouthernPolar") ||
								jsElement.hasChildElement("CircleNorthernPolar") ||
								jsElement.hasChildElement("CircleSouthernTropic") ||
								jsElement.hasChildElement("CircleNorthernTropic");
				}
			}, {
				caption: "add <CircleNorthernPolar>",
				action: Xonomy.newElementChild,
				actionParameter: "<CircleNorthernPolar/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CircleParallel") ||
								jsElement.hasChildElement("CircleMeridian") ||
								jsElement.hasChildElement("CircleSouthernPolar") ||
								jsElement.hasChildElement("CircleNorthernPolar") ||
								jsElement.hasChildElement("CircleSouthernTropic") ||
								jsElement.hasChildElement("CircleNorthernTropic");
				}
			}, {
				caption: "add <CircleSouthernTropic>",
				action: Xonomy.newElementChild,
				actionParameter: "<CircleSouthernTropic/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CircleParallel") ||
								jsElement.hasChildElement("CircleMeridian") ||
								jsElement.hasChildElement("CircleSouthernPolar") ||
								jsElement.hasChildElement("CircleNorthernPolar") ||
								jsElement.hasChildElement("CircleSouthernTropic") ||
								jsElement.hasChildElement("CircleNorthernTropic");
				}
			}, {
				caption: "add <CircleNorthernTropic>",
				action: Xonomy.newElementChild,
				actionParameter: "<CircleNorthernTropic/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("CircleParallel") ||
								jsElement.hasChildElement("CircleMeridian") ||
								jsElement.hasChildElement("CircleSouthernPolar") ||
								jsElement.hasChildElement("CircleNorthernPolar") ||
								jsElement.hasChildElement("CircleSouthernTropic") ||
								jsElement.hasChildElement("CircleNorthernTropic");
				}
			}, {
				caption: "@duplicate",
				action: Xonomy.duplicateElement
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			mustBeBefore: ["Body", "Oblique", "Time", "Catalog"]
		},
		"Body": {
			menu: [{
				caption: "add <BodyStellar>",
				action: Xonomy.newElementChild,
				actionParameter: "<BodyStellar/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("BodyStellar") ||
								jsElement.hasChildElement("BodyAreal") ||
								jsElement.hasChildElement("BodyPlanet") ||
								jsElement.hasChildElement("BodyMoon") ||
								jsElement.hasChildElement("BodySun") ||
								jsElement.hasChildElement("BodyElliptical") ||
								jsElement.hasChildElement("BodyParabolical");
				}
			}, {
				caption: "add <BodyAreal>",
				action: Xonomy.newElementChild,
				actionParameter: "<BodyAreal/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("BodyStellar") ||
								jsElement.hasChildElement("BodyAreal") ||
								jsElement.hasChildElement("BodyPlanet") ||
								jsElement.hasChildElement("BodyMoon") ||
								jsElement.hasChildElement("BodySun") ||
								jsElement.hasChildElement("BodyElliptical") ||
								jsElement.hasChildElement("BodyParabolical");
				}
			}, {
				caption: "add <BodyPlanet>",
				action: Xonomy.newElementChild,
				actionParameter: "<BodyPlanet/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("BodyStellar") ||
								jsElement.hasChildElement("BodyAreal") ||
								jsElement.hasChildElement("BodyPlanet") ||
								jsElement.hasChildElement("BodyMoon") ||
								jsElement.hasChildElement("BodySun") ||
								jsElement.hasChildElement("BodyElliptical") ||
								jsElement.hasChildElement("BodyParabolical");
				}
			}, {
				caption: "add <BodyMoon>",
				action: Xonomy.newElementChild,
				actionParameter: "<BodyMoon/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("BodyStellar") ||
								jsElement.hasChildElement("BodyAreal") ||
								jsElement.hasChildElement("BodyPlanet") ||
								jsElement.hasChildElement("BodyMoon") ||
								jsElement.hasChildElement("BodySun") ||
								jsElement.hasChildElement("BodyElliptical") ||
								jsElement.hasChildElement("BodyParabolical");
				}
			}, {
				caption: "add <BodySun>",
				action: Xonomy.newElementChild,
				actionParameter: "<BodySun/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("BodyStellar") ||
								jsElement.hasChildElement("BodyAreal") ||
								jsElement.hasChildElement("BodyPlanet") ||
								jsElement.hasChildElement("BodyMoon") ||
								jsElement.hasChildElement("BodySun") ||
								jsElement.hasChildElement("BodyElliptical") ||
								jsElement.hasChildElement("BodyParabolical");
				}
			}, {
				caption: "add <BodyElliptical>",
				action: Xonomy.newElementChild,
				actionParameter: "<BodyElliptical/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("BodyStellar") ||
								jsElement.hasChildElement("BodyAreal") ||
								jsElement.hasChildElement("BodyPlanet") ||
								jsElement.hasChildElement("BodyMoon") ||
								jsElement.hasChildElement("BodySun") ||
								jsElement.hasChildElement("BodyElliptical") ||
								jsElement.hasChildElement("BodyParabolical");
				}
			}, {
				caption: "add <BodyParabolical>",
				action: Xonomy.newElementChild,
				actionParameter: "<BodyParabolical/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("BodyStellar") ||
								jsElement.hasChildElement("BodyAreal") ||
								jsElement.hasChildElement("BodyPlanet") ||
								jsElement.hasChildElement("BodyMoon") ||
								jsElement.hasChildElement("BodySun") ||
								jsElement.hasChildElement("BodyElliptical") ||
								jsElement.hasChildElement("BodyParabolical");
				}
			}, {
				caption: "@duplicate",
				action: Xonomy.duplicateElement
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			mustBeBefore: ["Oblique", "Time", "Catalog"]
		},
		"HMS": {
			menu: [{
				caption: "add \@@neg",
				action: Xonomy.newAttribute,
				actionParameter: {name: "neg"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("neg");
				}
			}, {
				caption: "add \@@hrs",
				action: Xonomy.newAttribute,
				actionParameter: {name: "hrs"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("hrs");
				}
			}, {
				caption: "add \@@min",
				action: Xonomy.newAttribute,
				actionParameter: {name: "min"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("min");
				}
			}, {
				caption: "add \@@sec",
				action: Xonomy.newAttribute,
				actionParameter: {name: "sec"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("sec");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement
			}],
			attributes: {
				"neg": {
					asker: Xonomy.askString
				},
				"hrs": {
					asker: Xonomy.askString
				},
				"min": {
					asker: Xonomy.askString
				},
				"sec": {
					asker: Xonomy.askString
				}
			}
		},
		"Rational": {
			menu: [{
				caption: "add \@@value",
				action: Xonomy.newAttribute,
				actionParameter: {name: "value"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("value");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement
			}],
			attributes: {
				"value": {
					asker: Xonomy.askString
				}
			}
		},
		"Longitude": {
			menu: [{
				caption: "add <DMS>",
				action: Xonomy.newElementChild,
				actionParameter: "<DMS/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("DMS") ||
								jsElement.hasChildElement("HMS") ||
								jsElement.hasChildElement("Rational");
				}
			}, {
				caption: "add <HMS>",
				action: Xonomy.newElementChild,
				actionParameter: "<HMS/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("DMS") ||
								jsElement.hasChildElement("HMS") ||
								jsElement.hasChildElement("Rational");
				}
			}, {
				caption: "add <Rational>",
				action: Xonomy.newElementChild,
				actionParameter: "<Rational/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("DMS") ||
								jsElement.hasChildElement("HMS") ||
								jsElement.hasChildElement("Rational");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			mustBeBefore: ["Latitude", "rad"]
		},
		"Latitude": {
			menu: [{
				caption: "add <DMS>",
				action: Xonomy.newElementChild,
				actionParameter: "<DMS/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("DMS") ||
								jsElement.hasChildElement("HMS") ||
								jsElement.hasChildElement("Rational");
				}
			}, {
				caption: "add <HMS>",
				action: Xonomy.newElementChild,
				actionParameter: "<HMS/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("DMS") ||
								jsElement.hasChildElement("HMS") ||
								jsElement.hasChildElement("Rational");
				}
			}, {
				caption: "add <Rational>",
				action: Xonomy.newElementChild,
				actionParameter: "<Rational/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("DMS") ||
								jsElement.hasChildElement("HMS") ||
								jsElement.hasChildElement("Rational");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			mustBeBefore: ["rad"]
		},
		"rad": {
			menu: [{
				caption: "add \@@value",
				action: Xonomy.newAttribute,
				actionParameter: {name: "value"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("value");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement
			}],
			attributes: {
				"value": {
					asker: Xonomy.askString
				}
			}
		},
		"HorizonEquatorial": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@practicality",
				action: Xonomy.newAttribute,
				actionParameter: {name: "practicality"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("practicality");
				}
			}, {
				caption: "add <AnnotationStraight>",
				action: Xonomy.newElementChild,
				actionParameter: "<AnnotationStraight/>"
			}, {
				caption: "add <Circle>",
				action: Xonomy.newElementChild,
				actionParameter: "<Circle/>"
			}, {
				caption: "add <Body>",
				action: Xonomy.newElementChild,
				actionParameter: "<Body/>"
			}, {
				caption: "add <Catalog>",
				action: Xonomy.newElementChild,
				actionParameter: "<Catalog/>"
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"practicality": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "none"},
						{value: "seldom"},
						{value: "sometimes"},
						{value: "frequent"},
						{value: "always"}
					]
				}
			}
		},
		"HorizonLocal": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@practicality",
				action: Xonomy.newAttribute,
				actionParameter: {name: "practicality"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("practicality");
				}
			}, {
				caption: "add <AnnotationStraight>",
				action: Xonomy.newElementChild,
				actionParameter: "<AnnotationStraight/>"
			}, {
				caption: "add <Circle>",
				action: Xonomy.newElementChild,
				actionParameter: "<Circle/>"
			}, {
				caption: "add <Body>",
				action: Xonomy.newElementChild,
				actionParameter: "<Body/>"
			}, {
				caption: "add <Oblique>",
				action: Xonomy.newElementChild,
				actionParameter: "<Oblique/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Oblique");
				}
			}, {
				caption: "add <Time>",
				action: Xonomy.newElementChild,
				actionParameter: "<Time/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Time");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"practicality": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "none"},
						{value: "seldom"},
						{value: "sometimes"},
						{value: "frequent"},
						{value: "always"}
					]
				}
			}
		},
		"HorizonEcliptical": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@practicality",
				action: Xonomy.newAttribute,
				actionParameter: {name: "practicality"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("practicality");
				}
			}, {
				caption: "add <AnnotationStraight>",
				action: Xonomy.newElementChild,
				actionParameter: "<AnnotationStraight/>"
			}, {
				caption: "add <Circle>",
				action: Xonomy.newElementChild,
				actionParameter: "<Circle/>"
			}, {
				caption: "add <Body>",
				action: Xonomy.newElementChild,
				actionParameter: "<Body/>"
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"practicality": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "none"},
						{value: "seldom"},
						{value: "sometimes"},
						{value: "frequent"},
						{value: "always"}
					]
				}
			}
		},
		"HorizonGalactic": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@practicality",
				action: Xonomy.newAttribute,
				actionParameter: {name: "practicality"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("practicality");
				}
			}, {
				caption: "add <AnnotationStraight>",
				action: Xonomy.newElementChild,
				actionParameter: "<AnnotationStraight/>"
			}, {
				caption: "add <Circle>",
				action: Xonomy.newElementChild,
				actionParameter: "<Circle/>"
			}, {
				caption: "add <Body>",
				action: Xonomy.newElementChild,
				actionParameter: "<Body/>"
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"practicality": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "none"},
						{value: "seldom"},
						{value: "sometimes"},
						{value: "frequent"},
						{value: "always"}
					]
				}
			}
		},
		"YMD": {
			menu: [{
				caption: "add \@@y",
				action: Xonomy.newAttribute,
				actionParameter: {name: "y"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("y");
				}
			}, {
				caption: "add \@@m",
				action: Xonomy.newAttribute,
				actionParameter: {name: "m"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("m");
				}
			}, {
				caption: "add \@@d",
				action: Xonomy.newAttribute,
				actionParameter: {name: "d"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("d");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement
			}],
			attributes: {
				"y": {
					asker: Xonomy.askString
				},
				"m": {
					asker: Xonomy.askString
				},
				"d": {
					asker: Xonomy.askString
				}
			},
			mustBeBefore: ["Time"]
		},
		"Time": {
			menu: [{
				caption: "add \@@standard",
				action: Xonomy.newAttribute,
				actionParameter: {name: "standard"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("standard");
				}
			}, {
				caption: "add <HMS>",
				action: Xonomy.newElementChild,
				actionParameter: "<HMS/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("HMS") ||
								jsElement.hasChildElement("Rational");
				}
			}, {
				caption: "add <Rational>",
				action: Xonomy.newElementChild,
				actionParameter: "<Rational/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("HMS") ||
								jsElement.hasChildElement("Rational");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"standard": {
					asker: Xonomy.askString
				}
			},
		},
		"ChartPage": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@size",
				action: Xonomy.newAttribute,
				actionParameter: {name: "size"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("size");
				}
			}, {
				caption: "add \@@view",
				action: Xonomy.newAttribute,
				actionParameter: {name: "view"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("view");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"size": {
					asker: Xonomy.askOpenPicklist,
					askerParameter: [
						{value: "a0"},
						{value: "a1"},
						{value: "a2"},
						{value: "a3"},
						{value: "a4"},
						{value: "a5"}
					]
				},
				"view": {
					asker: Xonomy.askString
				}
			},
			mustBeBefore: ["Oblique", "Horizon"]
		},
		"Oblique": {
			menu: [{
				caption: "add <Longitude>",
				action: Xonomy.newElementChild,
				actionParameter: "<Longitude/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Longitude");
				}
			}, {
				caption: "add <Latitude>",
				action: Xonomy.newElementChild,
				actionParameter: "<Latitude/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Latitude");
				}
			}, {
				caption: "add <rad>",
				action: Xonomy.newElementChild,
				actionParameter: "<rad/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("rad");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			mustBeBefore: ["Horizon", "Time"]
		},
		"Horizon": {
			menu: [{
				caption: "add <HorizonEquatorial>",
				action: Xonomy.newElementChild,
				actionParameter: "<HorizonEquatorial/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("HorizonEquatorial") ||
								jsElement.hasChildElement("HorizonLocal") ||
								jsElement.hasChildElement("HorizonEcliptical") ||
								jsElement.hasChildElement("HorizonGalactic");
				}
			}, {
				caption: "add <HorizonLocal>",
				action: Xonomy.newElementChild,
				actionParameter: "<HorizonLocal/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("HorizonEquatorial") ||
								jsElement.hasChildElement("HorizonLocal") ||
								jsElement.hasChildElement("HorizonEcliptical") ||
								jsElement.hasChildElement("HorizonGalactic");
				}
			}, {
				caption: "add <HorizonEcliptical>",
				action: Xonomy.newElementChild,
				actionParameter: "<HorizonEcliptical/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("HorizonEquatorial") ||
								jsElement.hasChildElement("HorizonLocal") ||
								jsElement.hasChildElement("HorizonEcliptical") ||
								jsElement.hasChildElement("HorizonGalactic");
				}
			}, {
				caption: "add <HorizonGalactic>",
				action: Xonomy.newElementChild,
				actionParameter: "<HorizonGalactic/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("HorizonEquatorial") ||
								jsElement.hasChildElement("HorizonLocal") ||
								jsElement.hasChildElement("HorizonEcliptical") ||
								jsElement.hasChildElement("HorizonGalactic");
				}
			}, {
				caption: "@duplicate",
				action: Xonomy.duplicateElement
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}]
		},
		"Calendar": {
			menu: [{
				caption: "add <YMD>",
				action: Xonomy.newElementChild,
				actionParameter: "<YMD/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("YMD");
				}
			}, {
				caption: "add <Time>",
				action: Xonomy.newElementChild,
				actionParameter: "<Time/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Time");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			mustBeBefore: ["Omega"]
		},
		"JD": {
			menu: [{
				caption: "add \@@value",
				action: Xonomy.newAttribute,
				actionParameter: {name: "value"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("value");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement
			}],
			attributes: {
				"value": {
					asker: Xonomy.askString
				}
			},
			mustBeBefore: ["Omega"]
		},
		"Omega": {
			menu: [{
				caption: "add <Calendar>",
				action: Xonomy.newElementChild,
				actionParameter: "<Calendar/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Calendar") ||
								jsElement.hasChildElement("JD");
				}
			}, {
				caption: "add <JD>",
				action: Xonomy.newElementChild,
				actionParameter: "<JD/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Calendar") ||
								jsElement.hasChildElement("JD");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
		},
		"ChartAzimuthal": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@scale",
				action: Xonomy.newAttribute,
				actionParameter: {name: "scale"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("scale");
				}
			}, {
				caption: "add \@@projection",
				action: Xonomy.newAttribute,
				actionParameter: {name: "projection"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("projection");
				}
			}, {
				caption: "add <ChartPage>",
				action: Xonomy.newElementChild,
				actionParameter: "<ChartPage/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("ChartPage");
				}
			}, {
				caption: "add <Oblique>",
				action: Xonomy.newElementChild,
				actionParameter: "<Oblique/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Oblique");
				}
			}, {
				caption: "add <Horizon>",
				action: Xonomy.newElementChild,
				actionParameter: "<Horizon/>"
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				},
				"scale": {
					asker: Xonomy.askString
				},
				"projection": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "orthographic"},
						{value: "stereographic"}
					]
				}
			}
		},
		"ChartPseudoCylindrical": {
			menu: [{
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				caption: "add \@@scale",
				action: Xonomy.newAttribute,
				actionParameter: {name: "scale"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("scale");
				}
			}, {
				caption: "add \@@projection",
				action: Xonomy.newAttribute,
				actionParameter: {name: "projection"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("projection");
				}
			}, {
				caption: "add <ChartPage>",
				action: Xonomy.newElementChild,
				actionParameter: "<ChartPage/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("ChartPage");
				}
			}, {
				caption: "add <Oblique>",
				action: Xonomy.newElementChild,
				actionParameter: "<Oblique/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Oblique");
				}
			}, {
				caption: "add <Horizon>",
				action: Xonomy.newElementChild,
				actionParameter: "<Horizon/>"
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			attributes: {
				"name": {
					asker: Xonomy.askString,
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}],
				},
				"scale": {
					asker: Xonomy.askString,
				},
				"projection": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "mollweide"}
					]
				}
			}
		},
		"Epoch": {
			menu: [{
				caption: "add <Calendar>",
				action: Xonomy.newElementChild,
				actionParameter: "<Calendar/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Calendar") ||
								jsElement.hasChildElement("JD");
				}
			}, {
				caption: "add <JD>",
				action: Xonomy.newElementChild,
				actionParameter: "<JD/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Calendar") ||
								jsElement.hasChildElement("JD");
				}
			}, {
				caption: "add <Omega>",
				action: Xonomy.newElementChild,
				actionParameter: "<Omega/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Omega");
				}
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}],
			mustBeBefore: ["Chart"]
		},
		"Chart": {
			menu: [{
				caption: "add <ChartAzimuthal>",
				action: Xonomy.newElementChild,
				actionParameter: "<ChartAzimuthal/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("ChartAzimuthal") ||
								jsElement.hasChildElement("ChartPseudoCylindrical");
				}
			}, {
				caption: "add <ChartPseudoCylindrical>",
				action: Xonomy.newElementChild,
				actionParameter: "<ChartPseudoCylindrical/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("ChartAzimuthal") ||
								jsElement.hasChildElement("ChartPseudoCylindrical");
				}
			}, {
				caption: "@duplicate",
				action: Xonomy.duplicateElement
			}, {
				caption: "@delete",
				action: Xonomy.deleteElement,
				hideIf: function(jsElement) {
					return jsElement.hasElements();
				}
			}]
		},
		"ChartaCaeli": {
			menu: [{
				// occurance 0..1
				caption: "add \@@name",
				action: Xonomy.newAttribute,
				actionParameter: {name: "name"},
				hideIf: function(jsElement) {
					return jsElement.hasAttribute("name");
				}
			}, {
				// occurance 0..1
				caption: "add <Epoch>",
				action: Xonomy.newElementChild,
				actionParameter: "<Epoch/>",
				hideIf: function(jsElement) {
					return jsElement.hasChildElement("Epoch");
				}
			}, {
				// occurance 1..n
				caption: "add <Chart>",
				action: Xonomy.newElementChild,
				actionParameter: "<Chart/>"
			}],
			attributes: {
				"name": {
					asker: Xonomy.askPicklist,
					askerParameter: [
						{value: "X"}
					],
					menu: [{
						caption: "delete",
						action: Xonomy.deleteAttribute
					}]
				}
			}
		}
	},
	onchange: function() {
		console.log("document changed");
	},
	validate: function() {
		console.log("validating...done");
	}
};