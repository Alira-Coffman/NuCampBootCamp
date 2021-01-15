import React, { Component } from 'react';
class CampsiteInfo extends Component
{
    render()
    {
        if(this.props.campsite)
        {
            return(
                <div className="row">

                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }
}
export default CampsiteInfo
/*Inside its render method, check if an object with the name "campsite" (passed in via props) can be evaluated as truthy (i.e.g is not null, is not undefined)
If so, then return an empty div that has the Bootstrap row class as an attribute.
If not, return an empty <div> with no classes applied to it.
Inside DirectoryComponent.js, go to the main return from the Directory component's render method.
*/