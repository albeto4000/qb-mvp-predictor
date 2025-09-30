navbar = `<nav class="navbar navbar-dark bg-dark pt-3 pb-2 px-3 justify-content">
    <a class="navbar-brand text-success" href="https://albeto4000.github.io/">MATTHEW DOLIN</a>
    <div>
        <div class="navbar-text text-capitalize">
            ` + document.title + `
        </div>
    </div>
    <button class="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#aboutModal">About</button>
</nav>`;

about_text = `This project was inspired by Ryan Brill and Ryan Weisman's paper "Predicting the Quarterback-MVP", as 
        well as the close MVP race between Lamar Jackson and Josh Allen in 2024. The code, written in R, loads NFL 
        stats from 2003-2024 and trains a logistic regression model that predicts each player's likelihood of being 
        awarded most valuable player. The model makes its predictions based on each quarterback's total touchdowns, yards 
        rushed/threw for, expected points added, and total wins compared to other quarterbacks, as well as their total 
        interceptions, their team's strength of victory, and their average completion percentage. 
        <br /><br />
        I invite anyone to pull my code - accessible publicly on <a href='https://github.com/albeto4000/qb-mvp-predictor'>GitHub</a>
         - and play around with the model to see how the results change as variables are added or removed.`

about_modal = `<div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="aboutModal" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">About "` + document.title + `"</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						` + about_text + `
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>`

document.write(navbar);
document.write(about_modal);