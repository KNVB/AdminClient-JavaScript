class FtpModule extends ModuleTemplate
{
	constructor(headingHandler,setMainContent)
	{
		super(headingHandler,setMainContent);		
		this.heading="FTP Server Administration";
		
		var functionItem={"title":"List Server","action":this.listServer.bind(this)};
		this.functionList.push(functionItem);
		
	  var functionItem={"title":"Add Server","action":this.addServer.bind(this)};
		this.functionList.push(functionItem);
		
		var functionItem={"title":"Remove Server","action":this.removeServer.bind(this)};
		this.functionList.push(functionItem);
	}
	listServer()
	{
		this.setMainContent(this.heading+" > list server");
	}
	addServer()
	{
		this.setMainContent(this.heading+" > add server");
	}
	removeServer()
	{
		this.setMainContent(this.heading+" > remove server");
	}
}