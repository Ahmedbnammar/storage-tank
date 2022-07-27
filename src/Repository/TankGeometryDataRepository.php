<?php

namespace App\Repository;

use App\Entity\TankGeometryData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TankGeometryData>
 *
 * @method TankGeometryData|null find($id, $lockMode = null, $lockVersion = null)
 * @method TankGeometryData|null findOneBy(array $criteria, array $orderBy = null)
 * @method TankGeometryData[]    findAll()
 * @method TankGeometryData[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TankGeometryDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TankGeometryData::class);
    }

    public function add(TankGeometryData $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(TankGeometryData $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return TankGeometryData[] Returns an array of TankGeometryData objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?TankGeometryData
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
