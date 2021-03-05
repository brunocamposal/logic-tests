/* ------ Ex1 ------*/
SELECT
   "aluno"."name"
FROM
   "aluno"
   inner JOIN "turma" ON "turma".aluno_id = "aluno".id
   INNER JOIN "professor" on "turma".professor_id = "professor".id
WHERE
   "professor"."name" = 'JOAO PEDRO';

/* ------ Ex2 ------*/
SELECT
   "turma".dia_da_semana
FROM
   "turma"
   inner JOIN "disciplina" ON "turma".disciplina_id = "disciplina".id
WHERE
   "disciplina"."name" = 'MATEMATICA';

/* ------ Ex3 ------*/
SELECT
   "aluno"
FROM
   "aluno"
   inner JOIN "turma" ON "turma".aluno_id = "aluno".id
   inner JOIN "disciplina" ON "turma".disciplina_id = "disciplina".id
WHERE
   "disciplina"."name" = 'MATEMATICA'
   AND "disciplina"."name" = 'FISICA';

/* ------ Ex4 ------*/
select
   "disciplina"
FROM
   "disciplina"
where
   "disciplina".id not in (
      select
         "turma".disciplina_id
      from
         "turma"
   );

/* ------ Ex5 ------*/
select
   "aluno"
FROM
   "aluno"
   inner join "turma" on "aluno".id = "turma".aluno_id
   inner join "disciplina" on "disciplina".id = "turma".disciplina_id
   and "disciplina"."name" != 'filosofia'
where
   "disciplina"."name" = 'math';