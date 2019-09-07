/* Video-spec.js 
 * 
 * copyright (c) 2010-2016, Christian Mayer and the CometVisu contributers.
 * 
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 3 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA
 */


/**
 * Unit tests for video widget
 *
 */
describe("testing a video widget", function() {

  it("should test the video creator", function() {

    var res = this.createTestWidgetString("video", {src: '', width: "100%", height: "90%"}, '<label>Test</label>');
    var widget = qx.bom.Html.clean([res[1]])[0];
    expect(res[0].getPath()).toBe("id_0");
    expect(widget).toHaveClass('video');
    expect(widget).toHaveLabel('Test');

    var videoWidget = widget.querySelector("video");
    expect(videoWidget).toHaveStyleSetting("width", "100%");
    expect(videoWidget).toHaveStyleSetting("height", "90%");
  });
});