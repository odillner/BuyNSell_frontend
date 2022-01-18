function ErrorPage({cancel}) {
	return (
		<div>
			<h1 id="errorPages-header"> 404 </h1>
			<div id="errorPages-padding"> <p> The page you requested does not exist. </p> </div>
			<div id="errorPages-padding">
				<button className="btn btn-danger" onClick={cancel}>Return Home </button>
			</div>
		</div>
		);
}

export default ErrorPage;