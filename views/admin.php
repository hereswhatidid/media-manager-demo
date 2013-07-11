<?php
/**
 * Represents the view for the administration dashboard.
 *
 * This includes the header, options, and other information that should provide
 * The User Interface to the end user.
 *
 * @package   MediaChooserDemo
 * @author    Gabe Shackle <gabe@hereswhatidid.com>
 * @license   GPL-2.0+
 * @link      http://hereswhatidid.com
 * @copyright 2013 Gabe Shackle or Company Name
 */
?>
<div class="wrap">

	<?php screen_icon(); ?>
	<h2><?php echo esc_html( get_admin_page_title() ); ?></h2>

	<form id="sampleform" action="#">
		<table class="form-table media-chooser-demo">
			<tbody>
			<tr>
				<td>
					<p>
						<a href="#" class="button basic-field">Basic Media Chooser</a><br />
						<span class="description">This the basic media chooser with no customization</span>
					</p>
					<p>
						<a href="#" class="button multi-field">Multi-select Media Chooser</a><br />
						<span class="description">Basic media chooser with multi-select enabled.</span>
					</p>
					<p>
						<a href="#" class="button custom-field">Customized Media Chooser</a><br />
						<span class="description">Custom window name, button text and display order (filename ascending), and enabling filters.</span>
					</p>
					<p class="field-holder">
						<a href="#" class="button textfield-field">Sample Field Input</a><br />
						<input type="text" name="samplefield" id="samplefield" class="textfield" /><br />
						<span class="description">Put the value of the selected item into a text field.</span>
					</p>
					<p class="field-holder">
						<a href="#" class="button textfield-field">Sample Field Input</a><br />
						<input type="text" name="samplefield2" id="samplefield2" class="textfield" /><br />
						<span class="description">Put the value of the selected item into a text field.</span>
					</p>
					<p class="field-holder">
						<a href="#" class="button textfield-field">Sample Field Input</a><br />
						<input type="text" name="samplefield3" id="samplefield3" class="textfield" /><br />
						<span class="description">Put the value of the selected item into a text field.</span>
					</p>
					<p>
						<a href="#" class="button events-field">Media Chooser with Events</a><br />
						<span class="description">Media chooser with console.log() attached to various events.</span>
					</p>
				</td>
				<td>
					<label for="output"><strong>Output</strong></label><br>
					<textarea name="output" id="output" cols="30" rows="10"></textarea>
				</td>
			</tr>
			</tbody>
		</table>
	</form>
	<!-- TODO: Provide markup for your options page here. -->

</div>
