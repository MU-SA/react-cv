import { StateCreator } from 'zustand';

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  description: string;
  noExpiryDate: boolean;
}

export interface CertificatesSlice {
  certificates: Certificate[];
  addCertificate: () => void;
  removeCertificate: (id: string) => void;
  updateCertificate: (
    id: string,
    field: keyof Omit<Certificate, 'id'>,
    value: string | boolean
  ) => void;
}

export const certificatesSlice: StateCreator<CertificatesSlice, [], [], CertificatesSlice> = (
  set
) => ({
  certificates: [],

  addCertificate: () =>
    set((state: CertificatesSlice) => ({
      certificates: [
        ...state.certificates,
        {
          id: crypto.randomUUID(),
          name: '',
          issuer: '',
          issueDate: '',
          expiryDate: '',
          description: '',
          noExpiryDate: false,
        },
      ],
    })),

  removeCertificate: (id) =>
    set((state: CertificatesSlice) => ({
      certificates: state.certificates.filter((certificate) => certificate.id !== id),
    })),

  updateCertificate: (id, field, value) =>
    set((state: CertificatesSlice) => ({
      certificates: state.certificates.map((certificate) =>
        certificate.id === id ? { ...certificate, [field]: value } : certificate
      ),
    })),
});
