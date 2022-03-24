// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	general: [
		{
			type: 'category',
			label: 'Getting Started',
			link: {
				type: 'generated-index',
				description: 'Learn about the most important Meta Box concepts through step-by-step guides. Highly recommended to go through everything from the start to the end.',
			},
			items: [
				'introduction',
				'installation',
				'custom-post-types',
				'custom-fields',
			],
		},
		{
			type: 'category',
			label: 'Field Types',
			link: {
				type: 'doc',
				id: 'fields',
			},
			items: [
				{
					type: 'autogenerated',
					dirName: 'fields',
				}
			],
		},
		{
			type: 'category',
			label: 'Extensions',
			link: {
				type: 'doc',
				id: 'extensions',
			},
			items: [
				{
					type: 'autogenerated',
					dirName: 'extensions',
				}
			],
		},
		{
			type: 'category',
			label: 'Advanced',
			link: {
				type: 'generated-index',
				description: 'Learn about advanced features from Meta Box.',
			},
			items: [
				'shortcode',
				'cloning-fields',
				'validation',
				'sanitization',
				'integration',
				'database',
				'custom-attributes',
			],
		},
		{
			type: 'category',
			label: 'Developer Guides',
			link: {
				type: 'generated-index',
			},
			items: [
				'creating-fields-with-code',
				'field-settings',
				'displaying-fields-with-code',
				'creating-new-field-types',
			],
		},
		{
			type: 'category',
			label: 'References',
			link: {
				type: 'generated-index',
				description: 'API references for developers.',
			},
			items: [
				{
					type: 'category',
					label: 'Actions',
					link: {
						type: 'generated-index',
					},
					items: [
						{
							type: 'autogenerated',
							dirName: 'actions',
						}
					],
				},
				{
					type: 'category',
					label: 'Filters',
					link: {
						type: 'generated-index',
					},
					items: [
						{
							type: 'autogenerated',
							dirName: 'filters',
						}
					],
				},
				{
					type: 'category',
					label: 'Functions',
					link: {
						type: 'generated-index',
					},
					items: [
						{
							type: 'autogenerated',
							dirName: 'functions',
						}
					],
				},
			],
		},
		{
			type: 'category',
			label: 'Others',
			link: {
				type: 'generated-index',
			},
			items: [
				'updates',
				'support-policy',
				'compatibility',
			],
		},
	],
};

module.exports = sidebars;
