<?php

namespace App\Controller;

use App\Entity\TankGeometryData;
use App\Form\TankGeometryDataType;
use Dompdf\Dompdf;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Spipu\Html2Pdf\Html2Pdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Snappy\Pdf;

class PdfGenerationController extends AbstractController
{
  #[Route('/make-report', name: 'make_report', methods: ['POST'])]
  public function index(Request $request, Pdf $knpSnappyPdf): PdfResponse
  {
    $data = json_decode($request->getContent(), true);
    $chunks = array_chunk($data, 2);

    $renderedView = $this->renderView('report.html.twig', [
      'chunks' => $chunks,
    ]);

    return new PdfResponse(
      $knpSnappyPdf->getOutputFromHtml($renderedView),
      'file.pdf'
    );
  }
}
