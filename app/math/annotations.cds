using ms as service from '../../srv/service';

annotate service.math with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
            
        },
        {
            $Type : 'UI.DataField',
            Label : 'firstnum',
            Value : firstnum,
        },
        {
            $Type : 'UI.DataField',
            Label : 'secondnum',
            Value : secondnum,

        },
        {
            $Type : 'UI.DataField',
            Label : 'result',
            Value : result,
        },
    ]
);
annotate service.math with @(
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
                Label : 'firstnum',
                Value : firstnum,
                    @Common.FieldControl: 7
            },
            {
                $Type : 'UI.DataField',
                Label : 'secondnum',
                Value : secondnum,
            },
            {
                $Type : 'UI.DataField',
                Label : 'result',
                Value : result,
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
