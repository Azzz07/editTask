using ms as service from '../../srv/service';

annotate service.student with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cid',
            Value : cid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'course',
            Value : course,
        },
    ]
);
annotate service.student with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cid',
                Value : cid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
annotate service.student with @(
    UI.DataPoint #progress : {
        $Type : 'UI.DataPointType',
        Value : cid,
        Title : 'cid',
        TargetValue : 2,
        Visualization : #Progress,
        Criticality : cid,
        ![@Common.QuickInfo] : name,
    },
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'cid',
            Target : '@UI.DataPoint#progress',
        },
    ]
);
