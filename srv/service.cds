using task from '../db/schema';

service ms {
entity student as projection on task.student;
// @odata.draft.enabled
entity college as projection on task.college;

              @Common.SideEffects : 
            {
                SourceProperties :
                [
                    'id' , 'email'
                ],
                TargetProperties : [
                     'course'
                ],
            }
            @odata.draft.enabled
entity stud as projection on task.student2;

  @Common.SideEffects : 
            {
                SourceProperties :
                [
                    'firstnum' , 'secondnum'
                ],
                TargetProperties : [
                     'result'
                ],
            }
            @odata.draft.enabled
            entity math as projection on task.math;
}
