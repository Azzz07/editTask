using ms as service from '../../srv/service';

annotate service.college with @(
    UI.LineItem : [
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
    ]
);
annotate service.college with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
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
