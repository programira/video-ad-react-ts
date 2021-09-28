class DataService {

	// Returns mocked data. Instead of this, in real example we would use for example axios library and call the api and fetch data 
	getData() {
		return [
			{
				"sections":
					[
						{
							"title": "VIS.X",
							"description": "VIS.X is a new and unique kind of advertising technology that enables efficient execution of media and high impact ad products at scale. VIS.X wraps the inventory in a holistic auction offering all available products in one transaction to buyers, consequently optimizing thebidstream. YOC has developed this platform to unlock the real value of digital advertising – making VIS.X the go-to-platform for high impact programmatic advertising.",
							"blocks": [
								{
									"title": "High impact formats",
									"description": "Transactions can be executed with YOC’s proprietary high impact ad formats without further adjustments on the buyer’s DSP – the creative technology layer inside VIS.X transforms regular creative assets into high impact, rich media ads in real-time at transaction level."
								},
								{
									"title": "Brand-safe inventory",
									"description": "Hundreds of world renowned publishers are already integrated and connected with VIS.X, offering 100% brand-safe, premium inventory to buyers at scale."
								},
								{
									"title": "Holistic approach",
									"description": "VIS.X enables publishers to connect their monetization stack directly or via header bidding. The inventory is made available to all buyers at the same time and optimized for the best possible effective sell-through, thanks to a holistic auction approach."
								},
							]
						},
						{
							"title": "About YOC",
							"description": "Founded in 2001, YOC has created a marketplace for innovative and non-intrusive digital ad formats and delivers them across all programmatic and direct trading channels.",
							"blocks": [
								{
									"title": "Our mission",
									"description": "By combining VIS.X, our proprietary ad tech platform with our extensive media reach, YOC aims to operate qualitatively at the top of the advertising market. We want to deliver a better advertising experience to everyone. When we develop ad products, we strive to achieve extensive brand awareness with a real impact on results. We want advertisers to reach their objectives whilst we improve the user-experience. With our long-standing expertise and transparent processes our mission is to provide excellent and continuous high quality service and fast execution to our customers at any time. We are committed to these goals – every day."
								},
								{
									"title": "Brand-safe inventory",
									"description": "In May 2001 a Porsche hung from a crane in Berlin with the message “Cash or Crash?!” – In just one week, around 100k mobile phone users voted via text whether the cash value of the Porsche should be raffled or the car should be dropped. Finally, it fell to a depth of more than 50 meters. We realized the power of mobile and how you could reach out and engage with people. That’s when YOC – ‘Your Opinion Counts’ – was born. Back then this slogan was describing YOC’s business: Reaching people on their mobile devices and providing them with the information, they were really interested in. Not much has changed since then. Our vision remains reaching people on their most personal device, entertaining them and generating a desire for new products and brands. Technology has changed rapidly however and YOC has successfully progressed and evolved every step of the way: Best mobile-first advertising is what still drives us to develop new products and solutions every day."
								},
							]
						},
						{
							"title": "About our products",
							"description": "YOC’s proprietary products deliver highly effective advertising, combining cutting-edge technology with best practice in usability. We enable exciting and engaging advertising for users and advertisers.",
							"blocks": [
								{
									"title": "Transparent",
									"description": "We engage to provide the most viewable products in the market. We offer pricing models based purely on viewability such as CPCV or Viewable CPM (vCPM) – transparently measured according to market standards."
								},
								{
									"title": "Native and non-intrusive",
									"description": "Our non-intrusive formats are built to gain positive attention and are aligned with the Coalition for Better Ads. Integrated natively into premium editorial content, we create a truly sustainable branding effect."
								},
								{
									"title": "Cross-device and cross-platform",
									"description": "Execute your cross-device strategy instantly. Our products are built with a mobile-first approach and can easily be added to your integrated media plan for TV or Online. A truly digital advertising experience."
								},
							]
						}

					],
				"videoLink":"https://cdn.yoc.com/ad/demo/airbnb.mp4"
			}
		]
	}
}
export default new DataService();